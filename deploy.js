const shell = require("shelljs");
const uploadToS3 = require("./utils/uploadToS3");
const options = process.argv.slice(2, 4).join(" ");

uploadToS3.promised().then(({ js, css }) => {
  shell.exec(
    `serverless deploy -v ${options} --bundleName ${js} --cssBundleName ${css}`
  );
});
