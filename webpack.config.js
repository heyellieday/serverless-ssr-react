const path = require("path");
const glob = require("glob");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

const production = process.env.PRODUCTION_BUILD;

module.exports = {
  entry: ["./src/renderers/client.js"],
  mode: production ? "production" : "development",
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "dist")
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: [/(node_modules|bower_components)/],
        use: {
          loader: "babel-loader",
          options: {
            presets: ["babel-preset-env", "react"]
          }
        }
      },
      {
        // Rules for SCSS files. Loaders run in reverse order
        test: /\.(s*)css$/,
        use: [
          MiniCssExtractPlugin.loader,

          {
            loader: "css-loader"
          },
          { loader: "postcss-loader", options: { sourceMap: true } },

          {
            loader: "sass-loader",
            options: {
              sourceMap: true,
              precision: 8,
              data: "$ENV: " + "PRODUCTION" + ";"
            }
          }
        ]
      }
    ]
  },
  plugins: [
    new MiniCssExtractPlugin({
      // Options similar to the same options in webpackOptions.output
      // both options are optional
      filename: "[name].css",
      chunkFilename: "[id].css"
    })
  ]
};
