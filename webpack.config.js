
const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyPlugin = require("copy-webpack-plugin");



module.exports = {
  entry: './src/index.js',
  mode: 'development',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
     {
       test: /\.(png|svg|jpg|jpeg|gif)$/i,
       type: 'asset/resource',
     },
    ],
  },
  plugins: [
    new CleanWebpackPlugin({
      cleanOnceBeforeBuildPatterns: [path.resolve(__dirname, '..', '.tmp')],
      cleanAfterEveryBuildPatterns: ['!images/**/*', '!fonts/**/*'],
      verbose: true,
      dry: false
    }),
    new HtmlWebpackPlugin({ template: './src/index.html' }),
    new CopyPlugin({
      patterns: [
        { from: "src/images", to: "images" },
      ],
    }),
],

};