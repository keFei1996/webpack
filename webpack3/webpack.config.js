let path = require('path');
let HtmlWebpackPlugin = require('html-webpack-plugin');
let webpack = require('webpack');

module.exports = {
    mode: 'development',
    entry: {
        index: './src/index.js'
    },
    devServer: {
      port: 3000,
      contentBase: './dist'
    },
    module: {
      noParse: /jquery/,   // 不去解析jquery中的依赖
      rules: [
          {
              test: /\.js$/,
              exclude: /node_modules/,
              include: path.resolve('src'),
              use: {
                  loader: 'babel-loader',
                  options: {
                      presets: [
                          '@babel/preset-env',
                          '@babel/preset-react'
                      ]
                  }
              }
          },
          {
              test: /\.css$/,
              use: ['style-loader', 'css-loader']
          }
      ]
    },
    output: {
        filename: '[name].js',
        path: path.resolve(__dirname, 'dist')
    },
    plugins: [
        new webpack.IgnorePlugin(/\.\/locale/,/moment/),
        new HtmlWebpackPlugin({
            template: './public/index.html'
        })
    ]
}
