const chalk = require("chalk");
const fs = require("fs");
const path = require("path");

const output =
  chalk.bold.yellow("——————————————————————————————————————————————————") +
  "\n" +
  "\n" +
  chalk.bold.white("Pawel Grzybek") +
  "\n" +
  chalk.white("https://pawelgrzybek.com/") +
  "\n" +
  chalk.white("https://twitter.com/pawelgrzybek") +
  "\n" +
  chalk.white("https://github.com/pawelgrzybek") +
  "\n" +
  "\n" +
  chalk.bold.yellow("——————————————————————————————————————————————————") +
  "\n";

fs.writeFileSync(path.join(__dirname, "bin/output"), output);
