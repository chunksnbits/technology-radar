'use strict';

// ----------------------------------------------------------------------------- Dependencies
const HtmlWebpackPlugin = require('html-webpack-plugin');

const buildConfig = require('./webpack.config.build');
const paths = require('./paths');

// ----------------------------------------------------------------------------- Configuration
const publicPath = paths.servedPath;

// ----------------------------------------------------------------------------- Implementation
module.exports = Object.assign({}, buildConfig, {
  output: {
    // The build folder.
    path: paths.appBuild,
    // Generated JS file names (with nested folders).
    // There will be one main bundle, and one file per asynchronous chunk.
    // We don't currently advertise code splitting but Webpack supports it.
    filename: `[name].js`,
    chunkFilename: `chunk.[name].js`,
    // We inferred the "public path" (such as / or /my-project) from homepage.
    publicPath: publicPath,
  },
  entry: {
    polyfills: require.resolve('./polyfills'),
    webcomponent: paths.webcomponentIndexJs,
  },

  plugins: buildConfig.plugins
    .filter(plugin => !(plugin instanceof HtmlWebpackPlugin))
    .concat([
      new HtmlWebpackPlugin({
        inject: true,
        template: paths.webcomponentHtml,
        excludeChunks: ['main'],
        filename: 'index.html',
        chunksSortMode: (chunk, other) => {
          const chunkOrder = ['polyfill', 'webcomponent'];

          return chunkOrder.indexOf(chunk.names[0]) - chunkOrder.indexOf(other.names[0]);
        },
        minify: {
          removeComments: true,
          collapseWhitespace: true,
          removeRedundantAttributes: true,
          useShortDoctype: true,
          removeEmptyAttributes: true,
          removeStyleLinkTypeAttributes: true,
          keepClosingSlash: true,
          minifyJS: true,
          minifyCSS: true,
          minifyURLs: true,
        },
      })
    ])
});
