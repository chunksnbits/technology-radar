'use strict';

const autoprefixer = require('autoprefixer');
const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const ManifestPlugin = require('webpack-manifest-plugin');
const InterpolateHtmlPlugin = require('react-dev-utils/InterpolateHtmlPlugin');
const SWPrecacheWebpackPlugin = require('sw-precache-webpack-plugin');
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');
const paths = require('./paths');
const getClientEnvironment = require('./env');
const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

const { isDebugMode, onlyDefined } = require('./utils');

const publicPath = paths.servedPath;
const shouldUseRelativeAssetPaths = publicPath === './';
const shouldUseSourceMap = process.env.GENERATE_SOURCEMAP !== 'false';
const publicUrl = publicPath.slice(0, -1);
const env = getClientEnvironment(publicUrl);

if (env.stringified['process.env'].NODE_ENV !== '"production"') {
  throw new Error('Production builds must have NODE_ENV=production.');
}

const pkg = require(paths.appPackageJson);
const cssFilename = `${ pkg.version }/[name].css`;

const extractTextPluginOptions = shouldUseRelativeAssetPaths ? {
  publicPath: Array(cssFilename.split('/').length).join('../')
} : {};

module.exports = {
  bail: true,
  devtool: shouldUseSourceMap ? 'source-map' : false,

  entry: [require.resolve('./polyfills'), paths.appIndexJs],
  output: {
    // The build folder.
    path: paths.appBuild,
    // Generated JS file names (with nested folders).
    // There will be one main bundle, and one file per asynchronous chunk.
    // We don't currently advertise code splitting but Webpack supports it.
    filename: 'static/js/[name].[chunkhash:8].js',
    chunkFilename: 'static/js/[name].[chunkhash:8].chunk.js',
    // We inferred the "public path" (such as / or /my-project) from homepage.
    publicPath: publicPath,
    // Point sourcemap entries to original disk location (format as URL on Windows)
    devtoolModuleFilenameTemplate: info =>
      path
        .relative(paths.appSrc, info.absoluteResourcePath)
        .replace(/\\/g, '/'),
  },

  resolve: {
    modules: ['node_modules', paths.appNodeModules, paths.appPrivate, paths.appPublic].concat(
      process.env.NODE_PATH.split(path.delimiter).filter(Boolean)
    ),
    extensions: [
      '.mjs',
      '.web.ts',
      '.ts',
      '.web.tsx',
      '.tsx',
      '.web.js',
      '.js',
      '.json',
      '.web.jsx',
      '.jsx',
    ],
    alias: {
      'react-native': 'react-native-web',
    },
    plugins: [
      new TsconfigPathsPlugin({ configFile: paths.appTsConfig }),
    ],
  },

  module: {
    strictExportPresence: true,
    rules: [{
      test: /\.(js|jsx|mjs)$/,
      loader: require.resolve('source-map-loader'),
      enforce: 'pre',
      include: paths.appSrc,
    }, {
      oneOf: [{
        test: [/\.bmp$/, /\.gif$/, /\.jpe?g$/, /\.png$/],
        loader: require.resolve('url-loader'),
        options: {
          limit: 10000,
          name: 'static/media/[name].[hash:8].[ext]',
        },
      }, {
        test: /\.(js|jsx|mjs)$/,
        include: paths.appSrc,
        loader: require.resolve('babel-loader'),
        options: {
          compact: true,
        },
      }, {
        test: /\.(ts|tsx)$/,
        include: paths.appSrc,
        use: [{
          loader: require.resolve('ts-loader'),
          options: {
            // disable type checker - we will use it in fork plugin
            transpileOnly: true,
          },
        }],
      }, {
        test: /\.s?css$/,
        loader: ExtractTextPlugin.extract(
          Object.assign({
            fallback: {
                loader: require.resolve('style-loader'),
                options: {
                  hmr: false,
                },
            },
            use: [{
              loader: require.resolve('css-loader'),
              options: {
                importLoaders: 1,
                minimize: true,
                sourceMap: shouldUseSourceMap,
              },
            }, {
              loader: require.resolve('postcss-loader'),
              options: {
                // Necessary for external CSS imports to work
                // https://github.com/facebookincubator/create-react-app/issues/2677
                ident: 'postcss',
                plugins: () => [
                  require('postcss-flexbugs-fixes'),
                  autoprefixer({
                    browsers: [
                      '>1%',
                      'last 4 versions',
                      'Firefox ESR',
                      'not ie < 9', // React doesn't support IE8 anyway
                    ],
                    flexbox: 'no-2009',
                  }),
                ],
              },
            }, {
              loader: require.resolve('sass-loader')
            }],
          },
          extractTextPluginOptions
        )),
      }, {
        loader: require.resolve('file-loader'),
        exclude: [/\.(js|jsx|mjs)$/, /\.html$/, /\.json$/],
        options: {
          name: 'static/media/[name].[hash:8].[ext]',
      }
    }],
  }],
  },

  plugins: onlyDefined([
    new InterpolateHtmlPlugin(env.raw),
    new HtmlWebpackPlugin({
      inject: true,
      template: paths.appHtml,
      excludeChunks: ['webcomponent'],
      chunksSortMode: (chunk, other) => {
        const chunkOrder = ['polyfill', 'main'];

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
    }),
    new HtmlWebpackPlugin({
      inject: true,
      template: paths.webcomponentHtml,
      excludeChunks: ['main'],
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
    }),
    new webpack.DefinePlugin(env.stringified),
    !isDebugMode() && new UglifyJsPlugin({
      uglifyOptions: {
        parse: {
          ecma: 8,
        },
        compress: {
          ecma: 5,
          warnings: false,
          comparisons: false,
        },
        mangle: {
          safari10: true,
        },
        output: {
          ecma: 5,
          comments: false,
          ascii_only: true,
        },
      },
      parallel: true,
      cache: true,
      sourceMap: shouldUseSourceMap,
    }),
    new ExtractTextPlugin({
      filename: cssFilename,
    }),
    new ManifestPlugin({
      fileName: 'asset-manifest.json',
    }),
    new SWPrecacheWebpackPlugin({
      dontCacheBustUrlsMatching: /\.\w{8}\./,
      filename: 'service-worker.js',
      logger(message) {
        if (message.indexOf('Total precache size is') === 0) {
          return;
        }
        if (message.indexOf('Skipping static resource') === 0) {
          return;
        }
        console.log(message);
      },
      minify: true,
      navigateFallback: publicUrl + '/index.html',
      navigateFallbackWhitelist: [/^(?!\/__).*/],
      staticFileGlobsIgnorePatterns: [/\.map$/, /asset-manifest\.json$/],
    }),
    new webpack.IgnorePlugin(/^\.\/locale$/, /moment$/),
    new ForkTsCheckerWebpackPlugin({
      async: false,
      tsconfig: paths.appTsConfig,
      tslint: paths.appTsLint,
    }),
  ]),
  node: {
    dgram: 'empty',
    fs: 'empty',
    net: 'empty',
    tls: 'empty',
    child_process: 'empty',
  },
};
