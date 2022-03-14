const figlet = require("figlet")
const lolcat = require("@darkobits/lolcatjs")

function showLogo() {
  const text = figlet.textSync("git-quick-push")
  const textColor = lolcat.fromString(text)
  console.log(textColor)
}

module.exports = showLogo
