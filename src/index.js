#! /usr/bin/env node
const program = require("commander")
const showLogo = require("./utils/showLogo")
const list = require("./core/list")
const create = require("./core/create")

// show a beautiful logo "git-quick-push"
showLogo()

program
  .command("list")
  .description("show a list of git commands")
  .action(() => {
    list()
  })

program
  .command("create")
  .description("create vite-vue3 template")
  .action(() => {
    create()
  })

program.version("1.0.21").parse(process.argv)
