const Path = require("path");
const Webpack = require("webpack");
const { merge } = require("webpack-merge");

const common = require("./webpack.common.js");

module.exports = merge(common, {
  target: "web",
  mode: "development",
  devtool: "eval-cheap-source-map",
  output: {
    chunkFilename: "js/[name].chunk.js",
  },
  devServer: {
    client: {
      logging: "error",
    },
    hot: true,
  },
  plugins: [
    new Webpack.DefinePlugin({
      "process.env.NODE_ENV": JSON.stringify("development"),
    }),
  ],
  module: {
    rules: [],
  },
});
