var fs = require("fs");
var aws = require("aws-sdk");

var s3 = new aws.S3();

// Bucket names must be unique across all S3 users

var myBucket = process.env.ASSETS_BUCKET;

fs.readFile("dist/bundle.js", function(err, data) {
  if (err) {
    throw err;
  }

  params = {
    Bucket: myBucket,
    Key: `bundle.js`,
    Body: data,
    ACL: "public-read"
  };

  s3.putObject(params, function(err, data) {
    if (err) {
      console.log(err);
    } else {
      console.log("Successfully uploaded data to myBucket/myKey");
    }
  });
});
