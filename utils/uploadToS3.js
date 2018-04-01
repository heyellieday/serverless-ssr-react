import fs from "fs";
import aws from "aws-sdk";
import fileToHash from "./fileToHash";

module.exports.promised = () => {
  const promise = new Promise((resolve, reject) => {
    const s3 = new aws.S3();
    const BUNDLE_LOCATION = "dist/bundle.js";

    // Bucket names must be unique across all S3 users

    var myBucket = process.env.ASSETS_BUCKET;

    fs.readFile(BUNDLE_LOCATION, function(err, data) {
      if (err) {
        throw err;
      }

      const readStream = fs.createReadStream(BUNDLE_LOCATION);
      fileToHash(readStream).then(bundleHash => {
        const bundleName = `bundle-${bundleHash}.js`;
        params = {
          Bucket: myBucket,
          Key: bundleName,
          Body: data,
          ACL: "public-read"
        };
        s3.putObject(params, function(err, data) {
          resolve(bundleName);
        });
      });
    });
  });
  return promise;
};
