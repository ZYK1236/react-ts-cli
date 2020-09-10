const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
// const UglifyJsPlugin = require('uglifyjs-webpack-plugin')
const SimpleProgressWebpackPlugin = require('simple-progress-webpack-plugin')
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer')
  .BundleAnalyzerPlugin
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const CompressionPlugin = require('compression-webpack-plugin')

module.exports = {
  mode: 'production',
  entry: {
    app: path.join(__dirname, './../', 'src/index.tsx')
  },
  output: {
    path: path.join(__dirname, './../', 'dist'),
    publicPath: './',
    filename: '[name].js'
  },
  module: {
    rules: [
      {
        test: /\.ts(x?)$/,
        use: [
          {
            loader: 'awesome-typescript-loader',
            options: {
              useCache: true,
              cacheDirectory: path.join(__dirname, './../', '.cache-dist')
            }
          }
        ]
      },
      //  不对node_module中的css/less做module处理
      {
        test: /\.css$/,
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader'
          }
        ],
        include: /node_modules/
      },
      {
        test: /\.less$/,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
          'less-loader'
        ],
        include: /node_modules/
      },

      //  对src下的css和less做module处理
      {
        test: /\.css$/,
        use: [
          MiniCssExtractPlugin.loader,
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
      {
        test: /\.less$/,
        use: [
          MiniCssExtractPlugin.loader,
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
      minify: {
        // 压缩HTML文件
        removeComments: true, // 移除HTML中的注释
        collapseWhitespace: true, // 删除空白符与换行符
        minifyCSS: true // 压缩内联css
      },
      filename: 'index.html',
      template: './public/index.html'
    }),
    new SimpleProgressWebpackPlugin(),
    new BundleAnalyzerPlugin({
      analyzerPort: 3001,
      generateStatsFile: false
    }),
    new MiniCssExtractPlugin({
      filename: 'css/[name].css'
      // chunkFilename: 'css/[id].css'
    }),
    new CompressionPlugin({
      test: /\.js(\?.*)?$/i,
      threshold: 8192
    })
  ],
  optimization: {
    runtimeChunk: {
      name: 'runtime'
    },
    splitChunks: {
      cacheGroups: {
        Vendors: {
          name: 'vendors',
          test: /[\\/]node_modules[\\/]/,
          priority: -10,
          chunks: 'all'
        }
      }
    }
  }
}
