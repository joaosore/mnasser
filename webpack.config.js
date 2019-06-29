const path = require("path");
const webpack = require("webpack");
const glob = require("glob-all");

const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const OptimizeCssAssetsPlugin = require("optimize-css-assets-webpack-plugin");

const UglifyJSPlugin = require("uglifyjs-webpack-plugin");
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const extractSass = new ExtractTextPlugin({
  filename: "../dist/[name].min.css"
});

const WebpackBundleAnalyzer = require("webpack-bundle-analyzer")
  .BundleAnalyzerPlugin;

const CopyWebpackPlugin = require("copy-webpack-plugin");
const CompressionPlugin = require("compression-webpack-plugin");

module.exports = {
  entry: ["./src/config/transiction.js"],
  output: {
    path: path.resolve("dist"),
    filename: "./main.js"
  },
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: ExtractTextPlugin.extract({
          use: [
            { loader: "css-loader", options: { minimize: true } },
            "sass-loader"
          ]
        })
      },
      {
        test: /\.css$/,
        use: ExtractTextPlugin.extract({
          use: [{ loader: "css-loader", options: { minimize: true } }]
        })
      },
      {
        test: /\.(otf|ttf|eot|svg|woff(2)?)(\?[a-z0-9=&.]+)?$/,
        loader: "file-loader?name=./assets/[name].[ext]"
      },
      {
        test: /\.(png|jpg?)(\?[a-z0-9=&.]+)?$/,
        loader: "file-loader?name=./assets/[name].[ext]"
      },
      {
        test: /\.ts$/,
        use: "ts-loader"
      }
    ]
  },
  plugins: [
    new UglifyJSPlugin(),
    extractSass,
    new OptimizeCssAssetsPlugin({
      cssProcessorPluginOptions: {
        preset: ["default", { discardComments: { removeAll: true } }]
      }
    }),
    new webpack.ProvidePlugin({
      $: "jquery",
      jQuery: "jquery",
      "window.jQuery": "jquery"
    }),
    new CopyWebpackPlugin([
      {
        from: "src/imgs/*",
        to: "./assets/",
        flatten: true
      }
    ]),
    new WebpackBundleAnalyzer()
    //	new CompressionPlugin({
    // 		algorithm: 'gzip'
    //	})
  ],
  optimization: {
    minimize: true
  }
};
