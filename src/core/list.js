const ora = require("ora")
const shell = require("shelljs")
const lolcat = require("@darkobits/lolcatjs")
const inquirer = require("inquirer")

const { emojiArr, commitArr } = require("./choices")
const list = async () => {
  const { git } = await inquirer.prompt([
    {
      type: "list",
      name: "git",
      message: lolcat.fromString("please choose git commands"),
      choices: ["git commit", "git pull", "git push", "exit"]
    }
  ])
  if (git == "exit") return shell.exit(1)
  if (!shell.which("git")) {
    shell.echo("Sorry, you need gitClone git first")
    return shell.exit(1)
  }
  shell.exec("git add .")
  if (git == "git pull" || git == "git push") {
    const loading = ora("").start()
    shell.exec(git)
    loading.succeed()
    return hander.list()
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
  shell.exec(
    `git commit -m "${emojiArr[commitArr.indexOf(type)]}${input ? type + ": " + input : type}"`
  )
  hander.list()
}
module.exports = list
