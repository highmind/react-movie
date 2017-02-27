// 生产环境
const webpack = require("webpack");

const HtmlWebpackPlugin = require('html-webpack-plugin');

const HTMLWebpackPluginConfig = new HtmlWebpackPlugin({
  template: `${__dirname}/app/index.html`,
  filename: 'index.html',
  inject: 'body',
});

const ExtractTextPlugin = require("extract-text-webpack-plugin"); //分离css

module.exports =  {
  entry: {
    app: './app/index.js',
    vendor:['react', 'react-dom', 'react-router', 'axios', 'redux', 'react-redux']
  },

  // output 是放入产生出来的结果的相关参数
  output: {
    path: `${__dirname}/dist`,
    publicPath : '/',  //用于生成的 路径为 为 /index_bundle.js
    filename: 'index_bundle.js',
  },

  resolve:{
    //  配置格式，用于antd-mobile
     extensions: [ '.web.tsx', '.web.ts', '.web.jsx', '.web.js', '.ts', '.tsx', '.js', '.jsx', '.json'],
  },

  module: {

    rules: [
        // 1 es2015
          {
              test: /\.js$/,
              exclude: /node_modules/,
              loader: 'babel-loader'
          },
        // 2 css
        {
          test: /\.css$/,
          use: ExtractTextPlugin.extract({
            fallback: "style-loader",
            use: "css-loader",
            publicPath: "/dist"
          })
        },

        // 3 图片
        {
          test: /\.(jpg|png|gif)$/,
          loader:'url-loader?limit=5000&name=images/[hash:8].[name].[ext]'
        },
        //4 处理font
        {
          test: /\.(ttf|woff|svg|eot)$/,
          loader: "file-loader?name=/fonts/[hash:8].[name].[ext]"
        }


    ],
  },
  // plugins 放置所使用的外挂
  plugins: [
      HTMLWebpackPluginConfig,

      //1 chunk插件
      new webpack.optimize.CommonsChunkPlugin({name:"vendor", filename:"vendor.bundle.js"}),

      //2 处理react waring问题
      new webpack.DefinePlugin({
        "process.env": {
          NODE_ENV: JSON.stringify("production")
        }
      }),

      //3 分离css
      // new ExtractTextPlugin('[name].bundle.css', {
      //     allChunks: true
      // })
      new ExtractTextPlugin({
        filename: "[name].bundle.css",
        disable: false,
        allChunks: true
      })

  ],
};
