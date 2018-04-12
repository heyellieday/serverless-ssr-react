const fs = require("fs");
const aws = require("aws-sdk");
const fileToHash = require("./fileToHash");

const readAndUpload = (prefix, extension, location, contentType, resolve) => {
  fs.readFile(location, function(err, data) {
    if (err) {
      throw err;
    }

    const readStream = fs.createReadStream(location);
    fileToHash(readStream).then(bundleHash => {
      const bundleName = `${prefix}-${bundleHash}.${extension}`;
      params = {
        Bucket: process.env.ASSETS_BUCKET,
        Key: bundleName,
        Body: data,
        ContentType: contentType,
        ACL: "public-read"
      };
      const s3 = new aws.S3();
      s3.putObject(params, function(err, data) {
        resolve(bundleName);
      });
    });
  });
};

module.exports.promised = () => {
  //Upload bundle.js
  const promise = new Promise((resolve, reject) => {
    readAndUpload("bundle", "js", "dist/bundle.js", "text/javascript", resolve);
  });
  // Upload main.css
  return new Promise((resolve, reject) => {
    promise.then(bundleName => {
      readAndUpload("main", "css", "dist/main.css", "text/css", cssBundleName =>
        resolve({ css: cssBundleName, js: bundleName })
      );
    });
  });
};
