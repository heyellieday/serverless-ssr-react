import fs from "fs";
import fileToHash from "./fileToHash";

it("returns a hash for a given file readStream when the promise resolves", done => {
  const readStream = fs.createReadStream("./utils/fileToHash.js");
  fileToHash(readStream).then(hash => {
    expect(typeof hash).toEqual("string");
    done();
  });
});
