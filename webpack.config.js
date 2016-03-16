var HtmlWebpackPlugin = require('html-webpack-plugin')
module.exports = {
  entry: "./app/index.js",
  output: {
    path: __dirname + "/dist",
    filename: "index.js"
  },
  module: {
    loaders: [{test: /\.js$/, exclude: /node_modules/, loader: "babel-loader"}]
  },
  plugins: [new HtmlWebpackPlugin({inject: "body",
                                  title: "Weather App",
                                  template: __dirname + "/app/index.html",
                                  filename: "index.html"
                                  })]

}
