const shell = require("shelljs");

const options = process.argv.slice(2, 4).join(" ");

shell.exec(`serverless deploy -v ${options}`);
