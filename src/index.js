#! /usr/bin/env node
const program = require("commander")
const inquirer = require("inquirer")
const lolcat = require("@darkobits/lolcatjs")
const shell = require("shelljs")
const ora = require("ora")
const fs = require("fs")
const gitClone = require("download-git-repo")
const handlebars = require("handlebars")

const showLogo = require("./logo")
const { emojiArr, commitArr } = require("./choices")
const clearDir = require("./deleteDir")

showLogo()

function download(projectName) {
  const loading = ora("downloading...").start()
  gitClone(
    "https://gitee.com:zqylzcwcxy/vite-vue3-tempalte#master",
    projectName,
    { clone: true },
    err => {
      if (err) {
        console.log(err)
        loading.fail()
      } else {
        loading.succeed()
        const packagePath = `${projectName}/package.json`
        const packageContent = fs.readFileSync(packagePath, "utf8")
        const packageResult = handlebars.compile(packageContent)({ name: projectName })
        fs.writeFileSync(packagePath, packageResult)
        console.log(lolcat.fromString("init successfully"))
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
  },
  create: async () => {
    const { projectName = "my-vite" } = await inquirer.prompt([
      {
        type: "input",
        name: "projectName",
        message: "Please input the project name"
      }
    ])
    fs.access(projectName, fs.constants.F_OK, async noExist => {
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

program
  .command("list")
  .description("show a list of git commands")
  .action(() => {
    hander.list()
  })

program
  .command("create")
  .description("create vite-vue3 template")
  .action(() => {
    hander.create()
  })

program.version("1.0.18").parse(process.argv)
