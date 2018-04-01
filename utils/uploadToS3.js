import fs from "fs";
import aws from "aws-sdk";
import fileToHash from "./fileToHash";

const s3 = new aws.S3();
const BUNDLE_LOCATION = "dist/bundle.js";

// Bucket names must be unique across all S3 users

var myBucket = process.env.ASSETS_BUCKET;
console.log("test");
fs.readFile(BUNDLE_LOCATION, function(err, data) {
  if (err) {
    throw err;
  }

  const readStream = fs.createReadStream(BUNDLE_LOCATION);
  fileToHash(readStream).then(bundleHash => {
    params = {
      Bucket: myBucket,
      Key: `bundle-${bundleHash}.js`,
      Body: data,
      ACL: "public-read"
    };
    console.log(bundleHash);
    s3.putObject(params, function(err, data) {});
  });
});
