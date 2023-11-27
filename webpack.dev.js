const { merge } = require("webpack-merge");
const common = require("./webpack.common.js");
//DEVEVLOPMENT ONLY
module.exports = merge(common, {
  mode: "development",
  devtool: "inline-source-map",
  devServer: {
    static: "./src",
  },
  optimization: {
    runtimeChunk: "single",
  },
});
