// 开发环境webpack配置
// 目的： 1 分离出 css文件 2 分离出公共js库文件  3 分离出业务逻辑js文件 4 反向代理到线上真实接口
const webpack = require("webpack");

const HtmlWebpackPlugin = require('html-webpack-plugin');

const HTMLWebpackPluginConfig = new HtmlWebpackPlugin({
  template: `${__dirname}/app/index.html`,
  filename: 'index.html',
  inject: 'body',
});

const ExtractTextPlugin = require("extract-text-webpack-plugin"); //分离css

module.exports =  {

  devtool: 'inline-source-map',  //配置sourcemap，方便错误调

  //entry 入口源文件
  entry: {
    app: './app/index.js',
    vendor:['react', 'react-dom', 'react-router', 'axios', 'redux', 'react-redux'] //分离库文件
  },

  // output 输出路径
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
        // 1 js 和 es2015
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

  // devServer 则是 webpack-dev-server 设定
  devServer: {
    // hot:true,
    host:'0.0.0.0',  //  使用本地ip访问
    inline: true,
    quiet: true,
    port: 8080,
    proxy: {  //反向代理，将ajax请求数据，转发，完整接口url为http://api.chinaplat.com/getval_2017
       '/getval_2017': {
       target: 'http://api.chinaplat.com',
       changeOrigin: true,
       secure: false
       }
    }
  },

  // plugins 放置所使用的插件
  plugins: [
      HTMLWebpackPluginConfig,

      //1 chunk插件，分离公共库文件
      new webpack.optimize.CommonsChunkPlugin({name:"vendor", filename:"vendor.bundle.js"}),

      //2 处理react waring问题
      new webpack.DefinePlugin({
        "process.env": {
          NODE_ENV: JSON.stringify("production")
        }
      }),

      // 3 分离css文件
      new ExtractTextPlugin({
        filename: "[name].bundle.css",
        disable: false,
        allChunks: true
      })

  ],
};
