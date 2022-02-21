#! /usr/bin/env node
"use strict"

var program = require("commander") // 绑定命令
var inquirer = require("inquirer") // 交互式选项
var figlet = require("figlet") // 生成好看的logo文字
var lolcat = require("@darkobits/lolcatjs") // 为文本添加随机颜色即炫彩
var shell = require("shelljs") // 脚本执行
var ora = require("ora") // 加载图标
var fs = require("fs") // 读写文件
var gitClone = require("download-git-repo") // git clone
var handlebars = require("handlebars") // 按照插值表达式填充值

// 生成logo文字
var text = figlet.textSync("git-quick-push")
var textColor = lolcat.fromString(text)
console.log(textColor)

// commit类别列表
var choices = [
  {
    emoji: ":tada:",
    commit: "初次提交"
  },
  {
    emoji: ":sparkles:",
    commit: "引入新功能"
  },
  {
    emoji: ":bug:",
    commit: "修复bug"
  },
  {
    emoji: ":lipstick:",
    commit: "更新UI和样式文件"
  },
  {
    emoji: ":fire:",
    commit: "移除代码或文件"
  },
  {
    emoji: ":art:",
    commit: "改进代码结构/代码格式"
  },
  {
    emoji: ":zap:",
    commit: "提升性能"
  },
  {
    emoji: ":memo:",
    commit: "撰写文档"
  }
]
var emojiArr = choices.map(function (item) {
  return item.emoji
})
var commitArr = choices.map(function (item) {
  return item.commit
})

// 删除指定路径下的所有空文件
function emptyDir(path) {
  var files = fs.readdirSync(path) // 读取路径下所有文件
  files.forEach(function (file) {
    var filePath = path + "/" + file
    var stats = fs.statSync(filePath) // 给定文件路径的信息
    // 有子文件就递归，没有就直接删除
    stats.isDirectory() ? emptyDir(filePath) : fs.unlinkSync(filePath)
  })
}

// 删除指定路径下的所有空文件夹
function rmEmptyDir(path) {
  var files = fs.readdirSync(path) // 读取路径下所有文件夹
  if (files.length > 0) {
    var tempFile = 0
    files.forEach(function (file) {
      tempFile++
      rmEmptyDir(path + "/" + file, 1)
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
  var loading = ora("正在下载模版...").start()
  gitClone("https://gitee.com:zqylzcwcxy/vite-vue3-tempalte#master", projectName, { clone: true }, function (err) {
    if (err) {
      console.log(err) // 打印错误
      loading.fail() // 显示x号
    } else {
      loading.succeed() // 显示勾号
      var packagePath = projectName + "/package.json"
      var packageContent = fs.readFileSync(packagePath, "utf8") // 读取package.json数据
      var packageResult = handlebars.compile(packageContent)({ name: projectName }) // 填充更新package.json数据
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
  })
}

// commander命令所触发的函数
var hander = {
  list: async function list() {
    var _ref = await inquirer.prompt([
        {
          type: "list",
          name: "git",
          message: lolcat.fromString("请选择git命令"),
          choices: ["git commit", "git pull", "git push", "exit"]
        }
      ]),
      git = _ref.git

    if (git == "exit") return shell.exit(1)
    // 是否安装了git
    if (!shell.which("git")) {
      shell.echo("Sorry, you need gitClone git first")
      return shell.exit(1)
    }
    shell.exec("git add .")
    // 选择git pull 或 git pusj
    if (git == "git pull" || git == "git push") {
      var loading = ora("").start() // 添加加载动画
      shell.exec(git)
      loading.succeed() // 结束加载动画
      return hander.list() // 继续显示列表
    }

    var _ref2 = await inquirer.prompt([
        {
          type: "list",
          name: "type",
          message: lolcat.fromString("请选择commit类别"),
          choices: commitArr
        }
      ]),
      type = _ref2.type

    var _ref3 = await inquirer.prompt([
        {
          type: "input",
          name: "input",
          message: lolcat.fromString("可输入自定义commit说明（不输入则使用默认文本）")
        }
      ]),
      input = _ref3.input
    // 为commit添加相应emoji图标和文本

    shell.exec('git commit -m "' + emojiArr[commitArr.indexOf(type)] + (input ? input : type) + '"')
    hander.list()
  },
  create: async function create() {
    // 引导输入项目名称
    var _ref4 = await inquirer.prompt([
        {
          type: "input",
          name: "projectName",
          message: "请输入项目名称"
        }
      ]),
      _ref4$projectName = _ref4.projectName,
      projectName = _ref4$projectName === undefined ? "my-vite" : _ref4$projectName
    // 检查当前目录中是否存在该名称文件夹

    fs.access(projectName, fs.constants.F_OK, async function (noExist) {
      // 不存在就下载模板，存在就引导是否覆盖该名称文件夹
      if (noExist) {
        download(projectName)
      } else {
        console.log(lolcat.fromString("已存在该名称项目"))

        var _ref5 = await inquirer.prompt([
            {
              type: "list",
              name: "intention",
              message: lolcat.fromString("是否覆盖该名称项目？"),
              choices: ["要的就是这个效果", "我再想想"]
            }
          ]),
          intention = _ref5.intention

        if (intention == "我再想想") return

        var _ref6 = await inquirer.prompt([
            {
              type: "list",
              name: "confirm",
              message: lolcat.fromString("请谨慎选择，原文件夹下内容将会丢失！"),
              choices: ["坚定不移", "那算啦"]
            }
          ]),
          confirm = _ref6.confirm

        if (confirm == "那算啦") return
        clearDir(projectName)
        download(projectName)
      }
    })
  }

  // list命令
}
program
  .command("list")
  .description("显示commit类别列表")
  .action(function () {
    hander.list()
  })

// create命令
program
  .command("create")
  .description("创建vite-vue3模板项目")
  .action(function () {
    hander.create()
  })

// // process.argv是一个数组，包含node.exe的绝对路径和npm包的绝对路径
program.version("1.0.14").parse(process.argv)
