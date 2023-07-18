const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const webpack = require('webpack');

module.exports = (env) => {
  return {
    entry: './src/index.tsx',
    output: { path: path.join(__dirname, 'build'), filename: 'index.bundle.js', publicPath: '/' },
    mode: 'none',
    resolve: {
      extensions: ['.tsx', '.ts', '.js'],
    },
    devServer: {
      open: true,
      port: env.PORT,
      static: path.join(__dirname, 'src'),
      historyApiFallback: true,
    },
    module: {
      rules: [
        {
          test: /\.(js|jsx|ts|tsx)$/,
          exclude: /node_modules/,
          use: ['babel-loader'],
         
        },
      
        {
          test: /\.(css|scss)$/,
          use: ['style-loader', 'css-loader'],
        },
        {
          test: /\.(jpg|jpeg|png|gif|mp3|svg)$/,
          use: ['file-loader'],

        },
      ],
    },
    optimization: {
      minimize: true,
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: path.join(__dirname, 'public', 'index.html'),
        favicon: './public/favicon.png',
      }),

      
    ],
   
  };
};
