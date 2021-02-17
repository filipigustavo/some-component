var path = require('path')

module.exports = {
  mode: "production",
  entry: "./src/components/SomeComponent.js",
  output: {
    path: path.resolve('dist'),
    filename: 'SomeComponent.js',
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