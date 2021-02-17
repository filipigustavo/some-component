var path = require('path')

module.exports = {
  mode: "production",
  entry: "./src/components/index.js",
  output: {
    path: path.resolve('dist'),
    fileName: 'index.js',
    libraryTarget: 'commonjs2'
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /(node_modules)/,
        use: 'babel-loader'
      }
    ]
  }
}