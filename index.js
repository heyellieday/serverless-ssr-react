const serverless = require("serverless-http");
const express = require("express");
const app = express();
const appRouter = require("./bin/app").default;

app.get("*", function(req, res) {
  appRouter(res, res);
});

module.exports.handler = serverless(app);
