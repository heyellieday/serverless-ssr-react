const serverless = require("serverless-http");
const express = require("express");
const app = express();
const appPath = process.env.IN_LAMBDA ? "bin" : "src";
const appHandler = require("./" + appPath + "/renderers/server").default;

app.get("*", function(req, res) {
  appHandler(req, res);
});

if (process.env.IN_LAMBDA) {
  module.exports.handler = serverless(app);
} else {
  app.listen("8080");
}
