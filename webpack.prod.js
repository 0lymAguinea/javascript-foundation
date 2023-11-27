const { merge } = require("webpack-merge");
const common = require("./webpack.common.js");
//PRODUCTION ONLY
module.exports = merge(common, {
  mode: "production",
  devtool: "source-map",
});
