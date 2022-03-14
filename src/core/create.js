const ora = require("ora")
const shell = require("shelljs")
const lolcat = require("@darkobits/lolcatjs")
const inquirer = require("inquirer")
const gitClone = require("download-git-repo")
const fs = require("fs")
const handlebars = require("handlebars")
const clearDir = require("../utils/deleteDir")

/**
 * @param  projectName name of the created project
 */
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
const create = async () => {
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
module.exports = create
