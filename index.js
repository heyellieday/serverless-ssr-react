const serverless = require("serverless-http");
const express = require("express");
const app = express();
const appHandler = require("./bin/renderers/server").default;

app.get("*", function(req, res) {
  appHandler(req, res);
});

module.exports.handler = serverless(app);
