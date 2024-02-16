const path = require("path")
const htmlWebpackPligin = require("html-webpack-plugin")
module.exports = {
  entry: {main: "./src/index.js"
},
  output: {
    filename: "main.[contenthash].js",
    path: path.resolve(__dirname, "./build"),
    clean: true,
    // publicPath:'/app-dev/'
  },
  plugins: [new htmlWebpackPligin({title: "Webpack App",filename:'index.html',template:'src/template.html'})],
}
