// 引入dashboard 优化命令行界面
// var Dashboard = require('webpack-dashboard');
// var DashboardPlugin = require('webpack-dashboard/plugin');
// var dashboard = new Dashboard();
// var  dashboardPlugin = new DashboardPlugin(dashboard.setData)

// 这边使用 HtmlWebpackPlugin，将 bundle 好的 <script> 插入到 body。${__dirname} 为 ES6 语法对应到 __dirname
// const webpack = require('webpack');
// const hotModule = new webpack.HotModuleReplacementPlugin()//热加载插件
const webpack = require("webpack");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const HTMLWebpackPluginConfig = new HtmlWebpackPlugin({
  template: `${__dirname}/app/index.html`,
  filename: 'index.html',
  inject: 'body',
});

const ExtractTextPlugin = require("extract-text-webpack-plugin"); //分离css

module.exports =  {
   devtool: 'inline-source-map',  //配置sourcemap，方便错误调试
  // 档案起始点从 entry 进入，因为是阵列所以也可以是多个档案
  entry: {
    app: './app/index.js',
    vendor:['react', 'react-dom', 'react-router', 'axios']
  },
  // output 是放入产生出来的结果的相关参数
  output: {
    path: `${__dirname}/dist`,
    publicPath : '/',  //用于生成的 路径为 为 /index_bundle.js
    filename: 'index_bundle.js',
  },
  module: {
    // loaders 则是放欲使用的 loaders，在这边是使用 babel-loader 将所有 .js（这边用到正则式）相关档案（排除了 npm 安装的套件位置 node_modules）转译成浏览器可以阅读的 JavaScript。preset 则是使用的 babel 转译规则，这边使用 react、es2015。若是已经单独使用 .babelrc 作为 presets 设定的话，则可以省略 query
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: {
          presets: ['es2015', 'react',"stage-2"],
        },
      },
      {test: /\.css$/, loader: ExtractTextPlugin.extract('style-loader', 'css-loader')},
      {test: /\.(jpg|png|gif)$/, loader:'url-loader?limit=5000&name=images/[hash:8].[name].[ext]'},
      {test: /\.(ttf|woff|svg|eot)$/, loader: "file-loader?name=fonts/[hash:8].[name].[ext]" }

    ],
  },
  // devServer 则是 webpack-dev-server 设定
  devServer: {
    // hot:true,
    host:'0.0.0.0',  //  使用本地ip访问
    inline: true,
    quiet: true,
    port: 8080,
  },
  // plugins 放置所使用的外挂
  plugins: [
      HTMLWebpackPluginConfig,
      //chunk插件
      new webpack.optimize.CommonsChunkPlugin("vendor", "vendor.bundle.js"),
      //处理react waring问题
      new webpack.DefinePlugin({
        "process.env": {
          NODE_ENV: JSON.stringify("production")
        }
      }),
      // 分离css
      new ExtractTextPlugin('[name].bundle.css', {
          allChunks: true
      }),
      //混淆js
      // new webpack.optimize.UglifyJsPlugin({
      //   mangle: {
      //     except: ['$super', '$', 'exports', 'require']
      //     //以上变量‘$super’, ‘$’, ‘exports’ or ‘require’，不会被混淆
      //   },
      //   compress: {
      //     warnings: false
      //   }
      // })
  ],
};
