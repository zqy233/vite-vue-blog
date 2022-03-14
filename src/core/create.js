const lolcat = require("@darkobits/lolcatjs")
const inquirer = require("inquirer")
const fs = require("fs")
const clearDir = require("../utils/deleteDir")
const download = require("../utils/download")

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
