const merge = require('webpack-merge');
const autoprefixer = require('autoprefixer');

const base = require('./webpack.base.js');

module.exports = merge(base, {
  mode: 'development',
  module: {
    rules: [
      {
        test: /\.s?css$/,
        use: [
          'style-loader',
          'css-loader',
          {
            loader: 'postcss-loader',
            options: {
              indent: 'postcss',
              plugins: () => [
                autoprefixer({
                  browsers: [
                    '>1%',
                    'last 2 versions',
                  ],
                }),
              ],
            },
          },
          'sass-loader',
        ],
      },
    ],
  },
});
