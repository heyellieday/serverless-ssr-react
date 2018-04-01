import fs from "fs";
import crypto from "crypto";

const fileToHash = readStream =>
  new Promise((resolve, reject) =>
    readStream
      .pipe(crypto.createHash("sha1").setEncoding("hex"))
      .on("finish", function() {
        resolve(this.read()); //the hash
      })
  );

module.exports = fileToHash;
