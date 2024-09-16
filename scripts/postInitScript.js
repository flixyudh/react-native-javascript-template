#!/usr/local/bin node
const ora = require('ora');
const {inquire} = require('./generator.js');
// import ora from "ora";
// import { inquire } from "./generator.js";

const spinner = ora('Executing post init script ');

new Promise((resolve) => {
  spinner.start();
  inquire(resolve);
}).then(() => {
  spinner.succeed();
}).catch(err => {
  console.log('📁 postInitScript.js:13 📁 | 🧭 err 🧭 | 🔀', err)
  spinner.fail();
  throw new Error('Something went wrong during the post init script execution');
});