const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: path.resolve(__dirname, 'src/index.js'),
  output: {
    filename: 'bundle.js',
  },
  resolve: {
    alias: {
      ['@imgs']: path.resolve(__dirname,'assets/imgs/'),
      ['@style']: path.resolve(__dirname,'assets/style/'),
      ['@apis']: path.resolve(__dirname,'src/core/apis/'),
      ['@components']: path.resolve(__dirname,'src/core/components/'),
      ['@config']: path.resolve(__dirname,'src/core/config/'),
      ['@literals']: path.resolve(__dirname,'src/core/literals/'),
      ['@models']: path.resolve(__dirname,'src/core/models/'),
      ['@store']: path.resolve(__dirname,'src/core/store/'),
      ['@utils']: path.resolve(__dirname,'src/core/utils/')
    }
  },
  module: {
    rules: [
      {
        test: /\.(jsx|js)$/,
        exclude: ['/node_modules', '**.test.js', '**.spec.js'],
        resolve: {
          extensions: ['.js', '.jsx']
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
