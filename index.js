#! /usr/bin/env node
import program from "commander" // 绑定命令
import inquirer from "inquirer" // 交互式选项
import figlet from "figlet" // 生成好看的logo文字
import lolcat from "@darkobits/lolcatjs" // 为文本添加随机颜色即炫彩
import shell from "shelljs" // 脚本执行
import ora from "ora" // 加载图标

// 生成logo文字
const text = figlet.textSync("git-quick-push")
const textColor = lolcat.fromString(text)

// commit类别列表
const choices = [
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
const emojiArr = choices.map(item => item.emoji)
const commitArr = choices.map(item => item.commit)

// commander命令所触发的函数
const hander = {
  list: async () => {
    const { git } = await inquirer.prompt([
      {
        type: "list",
        name: "git",
        message: lolcat.fromString("请选择git命令"),
        choices: ["git commit", "git pull", "git push"]
      }
    ])
    // 是否安装了git
    if (!shell.which("git")) {
      shell.echo("Sorry, you need download git first")
      shell.exit(1)
      return
    }
    shell.exec("git add .")
    if (git == "git pull") {
      shell.exec(git)
      hander.list()
      return
    }
    if (git == "git push") {
      // 添加加载动画
      const loading = ora("")
      loading.color = "green"
      loading.start()
      shell.exec("git push")
      loading.stop()
      hander.list()
      return
    }
    const { type } = await inquirer.prompt([
      {
        type: "list",
        name: "type",
        message: lolcat.fromString("请选择commit类别"),
        choices: commitArr
      }
    ])
    const { input } = await inquirer.prompt([
      {
        type: "input",
        name: "input",
        message: lolcat.fromString("可输入自定义commit说明（不输入则使用默认文本）")
      }
    ])
    // 为commit添加相应emoji图标和文本
    shell.exec(`git commit -m "${emojiArr[commitArr.indexOf(type)]}${input ? input : type}"`)
    hander.list()
  }
}

// 命令行命令
program
  .command("list")
  .description("显示commit类别列表")
  .action(async () => {
    console.log(textColor)
    hander.list()
  })

// process.argv是一个数组，包含node.exe的绝对路径和npm包的绝对路径
program.version("1.0.5").parse(process.argv)
