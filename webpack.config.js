const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CopyPlugin = require('copy-webpack-plugin');

module.exports = (env, argv) => {
  const isProd = argv.mode === 'production';

  return {
    entry: './src/js/index.js',

    output: {
      path: path.resolve(__dirname, 'dist'),
      filename: isProd ? 'js/[name].[contenthash:8].js' : 'js/[name].js',
      assetModuleFilename: 'assets/[name].[hash:8][ext]',
      clean: true,
    },

    devtool: isProd ? false : 'eval-source-map',

    module: {
      rules: [
        // JS: transpile ES6+ for older browsers.
        {
          test: /\.js$/,
          exclude: /node_modules/,
          use: 'babel-loader',
        },

        // Styles: .scss (ours) and .css (e.g. swiper/css). Chain runs bottom-up.
        {
          test: /\.(sc|c)ss$/,
          use: [
            isProd ? MiniCssExtractPlugin.loader : 'style-loader',
            'css-loader',
            'postcss-loader',
            {
              loader: 'sass-loader',
              options: { api: 'modern-compiler' },
            },
          ],
        },

        // Fonts referenced from SCSS (@font-face).
        {
          test: /\.(woff2?|eot|ttf|otf)$/i,
          type: 'asset/resource',
          generator: { filename: 'assets/fonts/[name].[hash:8][ext]' },
        },
      ],
    },

    plugins: [
      new HtmlWebpackPlugin({
        template: './src/index.html',
        minify: isProd,
      }),
      // Copy image assets verbatim; markup references them by relative path.
      new CopyPlugin({
        patterns: [{ from: 'src/assets/img', to: 'assets/img' }],
      }),
      // Extract CSS into a file only for production.
      ...(isProd
        ? [new MiniCssExtractPlugin({ filename: 'css/[name].[contenthash:8].css' })]
        : []),
    ],

    devServer: {
      static: path.resolve(__dirname, 'dist'),
      port: 3000,
      open: true,
      hot: true,
      historyApiFallback: true,
    },

    // Hero artwork is intentionally large; size hints add no value here.
    performance: { hints: false },
  };
};
