const path = require('path')
const webpack = require('webpack')

module.exports = {
  entry: path.join(__dirname, 'src/demo.js'),
  output: {
    path: path.join(__dirname, 'src'),
    filename: 'demo.js'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules)/,
        use: 'babel-loader'
      }, {
        test: /\.html$/,
        use: ['text-loader']
      },
      {
        test: /\.scss$/,
        use: [
          'css-loader',
          {
            loader: 'sass-loader',
            options: {
              includePaths: [
                'node_modules'
              ]
            }
          }
        ]
      }
    ]
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ],
  devServer: {
    open: true,
    hot: true,
    inline: true,
    watchContentBase: true,
    contentBase: [path.join(__dirname, 'src'), path.resolve(__dirname, 'node_modules')],
    overlay: {
      errors: true
    },
    port: 3000
  }
}
