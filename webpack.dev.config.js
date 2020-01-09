const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: './src/main.jsx',
  output: {
    filename: 'bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.(jsx|js)$/,
        exclude: /node_modules/,
        resolve: {
          extensions: [".js", ".jsx"]
        },
        use: [
          {
            loader: 'babel-loader',
            options: {
              presets: ['@babel/react', '@babel/preset-env'],
            },
          },
          'eslint-loader',
        ],
      },
      {
        test: /\.(ttf)$/,
        include: [path.resolve(__dirname, 'assets')],
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].[contenthash].[ext]',
              outputPath: 'assets/fonts',
              publicPath: '../fonts',
            },
          },
        ],
      },
      {
        test: /\.(jpg|JPG|jpeg|png)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].[contenthash].[ext]',
              outputPath: 'assets/imgs',
            },
          },
        ],
      },
      {
        test: /\.scss$/,
        exclude: /node_modules/,
        include: [path.resolve(__dirname, 'assets/style')],
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader',
            options: {
              modules: true,
            },
          },
          'sass-loader',
        ],
      },
      {
        test: /\.scss$/,
        exclude: /node_modules/,
        include: [path.resolve(__dirname, 'src')],
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              modules: true,
            },
          },
          'sass-loader',
        ],
      },
    ],
  },
  devServer: {
    contentBase: './dist',
    port: 9001,
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: './src/index.html',
      templateParameters: {
        title: 'Webpack Base Project',
      },
    }),
    new MiniCssExtractPlugin({
      filename: './assets/style/main.css',
    }),
    new CleanWebpackPlugin(),
  ],
};
