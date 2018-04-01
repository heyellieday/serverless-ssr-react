const path = require("path");

const production = process.env.PRODUCTION_BUILD;

module.exports = {
  entry: "./src/renderers/client.js",
  mode: production ? 'production' : 'development',
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "dist")
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["babel-preset-env", "react"]
          }
        }
      }
    ]
  }
};
