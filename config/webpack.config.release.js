'use strict';

// ----------------------------------------------------------------------------- Dependencies
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
  }
});
