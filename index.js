#! /usr/bin/env node
const program = require("commander") // 绑定命令
const inquirer = require("inquirer") // 交互式选项
const figlet = require("figlet") // 生成好看的logo文字
const lolcat = require("@darkobits/lolcatjs") // 为文本添加随机颜色即炫彩
const shell = require("shelljs") // 脚本执行
const ora = require("ora") // 加载图标
const fs = require("fs") // 读写文件
const gitClone = require("download-git-repo") // git clone
const handlebars = require("handlebars") // 按照插值表达式填充值

// 生成logo文字
const text = figlet.textSync("git-quick-push")
const textColor = lolcat.fromString(text)
console.log(textColor)

// commit类别列表
const choices = [
  {
    emoji: ":tada:",
    commit: "first commit "
  },
  {
    emoji: ":sparkles:",
    commit: "new feature "
  },
  {
    emoji: ":bug:",
    commit: "fix bug "
  },
  {
    emoji: ":lipstick:",
    commit: "update ui and style files "
  },
  {
    emoji: ":fire:",
    commit: "remove code or file "
  },
  {
    emoji: ":art:",
    commit: "improve code structure or code format "
  },
  {
    emoji: ":zap:",
    commit: "improve performance "
  },
  {
    emoji: ":memo:",
    commit: "document writing "
  }
]
const emojiArr = choices.map(item => item.emoji)
const commitArr = choices.map(item => item.commit)

// 删除指定路径下的所有空文件
function emptyDir(path) {
  const files = fs.readdirSync(path) // 读取路径下所有文件
  files.forEach(file => {
    const filePath = `${path}/${file}`
    const stats = fs.statSync(filePath) // 给定文件路径的信息
    // 有子文件就递归，没有就直接删除
    stats.isDirectory() ? emptyDir(filePath) : fs.unlinkSync(filePath)
  })
}

// 删除指定路径下的所有空文件夹
function rmEmptyDir(path) {
  const files = fs.readdirSync(path) // 读取路径下所有文件夹
  if (files.length > 0) {
    let tempFile = 0
    files.forEach(file => {
      tempFile++
      rmEmptyDir(`${path}/${file}`, 1)
    })
    if (tempFile === files.length) {
      fs.rmdirSync(path)
    }
  } else {
    fs.rmdirSync(path)
  }
}

// 清空指定路径下的所有文件及文件夹
function clearDir(path) {
  emptyDir(path)
  rmEmptyDir(path)
}

// 克隆远程仓库
function download(projectName) {
  const loading = ora("downloading...").start()
  gitClone(
    "https://gitee.com:zqylzcwcxy/vite-vue3-tempalte#master",
    projectName,
    { clone: true },
    err => {
      if (err) {
        console.log(err) // 打印错误
        loading.fail() // 显示x号
      } else {
        loading.succeed() // 显示勾号
        const packagePath = `${projectName}/package.json`
        const packageContent = fs.readFileSync(packagePath, "utf8") // 读取package.json数据
        const packageResult = handlebars.compile(packageContent)({ name: projectName }) // 填充更新package.json数据
        fs.writeFileSync(packagePath, packageResult) // 写入package.json
        console.log(lolcat.fromString("初始化模版成功"))
        shell.cd(projectName)
        if (!shell.which("code")) {
          shell.echo("need vscode to run script")
          shell.exit(1)
        } else {
          shell.exec("code ./")
        }
        if (!shell.which("yarn")) {
          shell.echo("need yarn to run auto script")
          shell.exit(1)
        } else {
          shell.exec("yarn")
          shell.exec("yarn dev")
        }
      }
    }
  )
}

// commander命令所触发的函数
const hander = {
  list: async () => {
    const { git } = await inquirer.prompt([
      {
        type: "list",
        name: "git",
        message: lolcat.fromString("please choose git commands"),
        choices: ["git commit", "git pull", "git push", "exit"]
      }
    ])
    if (git == "exit") return shell.exit(1)
    // 是否安装了git
    if (!shell.which("git")) {
      shell.echo("Sorry, you need gitClone git first")
      return shell.exit(1)
    }
    shell.exec("git add .")
    // 选择git pull 或 git push
    if (git == "git pull" || git == "git push") {
      const loading = ora("").start() // 添加加载动画
      shell.exec(git)
      loading.succeed() // 结束加载动画
      return hander.list() // 继续显示列表
    }
    const { type } = await inquirer.prompt([
      {
        type: "list",
        name: "type",
        message: lolcat.fromString("please select the commit category"),
        choices: commitArr
      }
    ])
    const { input } = await inquirer.prompt([
      {
        type: "input",
        name: "input",
        message: lolcat.fromString(
          "You can input a custom commit message (if not, the default text will be used)"
        )
      }
    ])
    // 为commit添加相应emoji图标和文本
    shell.exec(
      `git commit -m "${emojiArr[commitArr.indexOf(type)]}${input ? type + ":" + input : type}"`
    )
    hander.list()
  },
  create: async () => {
    // 引导输入项目名称
    const { projectName = "my-vite" } = await inquirer.prompt([
      {
        type: "input",
        name: "projectName",
        message: "请输入项目名称"
      }
    ])
    // 检查当前目录中是否存在该名称文件夹
    fs.access(projectName, fs.constants.F_OK, async noExist => {
      // 不存在就下载模板，存在就引导是否覆盖该名称文件夹
      if (noExist) {
        download(projectName)
      } else {
        console.log(lolcat.fromString("There is already a folder with that name"))
        const { intention } = await inquirer.prompt([
          {
            type: "list",
            name: "intention",
            message: lolcat.fromString("Overwrite folder of this name？"),
            choices: ["Yes", "No"]
          }
        ])
        if (intention == "No") return
        clearDir(projectName)
        download(projectName)
      }
    })
  }
}

// list命令
program
  .command("list")
  .description("show a list of git commands")
  .action(() => {
    hander.list()
  })

// create命令
program
  .command("create")
  .description("create vite-vue3 template")
  .action(() => {
    hander.create()
  })

// process.argv是一个数组，包含node.exe的绝对路径和npm包的绝对路径
program.version("1.0.18").parse(process.argv)
