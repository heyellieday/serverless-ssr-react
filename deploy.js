const shell = require("shelljs");

const options = process.argv.slice(2, 4).join(" ");

const hash = shell.exec("node ./utils/uploadToS3.js", { silent: true }).stdout;
shell.exec(`serverless deploy -v ${options} --bundleHash ${hash}`);
