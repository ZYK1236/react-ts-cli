const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const SimpleProgressWebpackPlugin = require('simple-progress-webpack-plugin')
const webpack = require('webpack')

module.exports = {
  mode: 'development',
  devtool: 'eval-cheap-module-source-map',
  devServer: {
    hot: true,
    port: 3001,
    // disableHostCheck: true,
    proxy: {
      '/api': {
        // api表示当前项目请求的key
        target: 'https://xdvolunteer.xyz', // 代理服务器路径
        pathRewrite: { '^/api': '/' }, // 重写路径
        changeOrigin: true
      }
    },
    disableHostCheck: true
  },
  entry: [
    'react-hot-loader/patch',
    path.join(__dirname, './../', 'src/index.tsx')
  ],
  module: {
    rules: [
      {
        test: /\.ts(x?)$/,
        use: [
          {
            loader: 'ts-loader'
          }
        ]
      },
      // 对于第三方库不采用css module
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
        include: /node_modules/
      },
      {
        test: /\.less$/,
        use: ['style-loader', 'css-loader', 'less-loader'],
        include: /node_modules/
      },
      // 对于src开发目录下的css文件采用css module
      {
        test: /\.css$/,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              modules: {
                localIdentName: '[name]_[local]_[hash:base64:5]'
              }
            }
          }
        ],
        exclude: /node_modules/
      },
      // less -> css module
      {
        test: /\.less$/,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              modules: {
                localIdentName: '[name]_[local]_[hash:base64:5]'
              }
            }
          },
          {
            loader: 'less-loader'
          }
        ],
        exclude: /node_modules/
      }
    ]
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js', '.jsx'] //引入文件不需要加后缀
  },
  plugins: [
    new HtmlWebpackPlugin({
      // 打包输出HTML
      title: 'Hello World app',
      filename: 'index.html',
      template: './public/index.html'
    }),
    new SimpleProgressWebpackPlugin(),
    // new DashboardPlugin(),
    new webpack.HotModuleReplacementPlugin()
  ]
}
