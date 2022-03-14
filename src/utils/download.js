const ora = require("ora")
const shell = require("shelljs")
const gitClone = require("download-git-repo")
const handlebars = require("handlebars")
const lolcat = require("@darkobits/lolcatjs")
const fs = require("fs")

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

module.exports = download
