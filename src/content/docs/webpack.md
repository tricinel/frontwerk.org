---
path: '/docs/webpack'
date: '2018-02-23'
title: 'Webpack'
sectionTitle: 'Build'
section: 3
subsection: 3
---

# Build your SPA with Webpack

Frontwerk uses [Webpack][webpack] under the hood to bundle your Javascript application.

## Default configuration

You can run the following command and have Webpack bundle your javascript.

```bash
frontwerk build --pack
```

> The above command assumes you have structured your project to have a `src` folder where your Javascript lives and a `dist` folder where the compiled versions will be written to. Furthermore, your entry point is a `src/index.js` or `src/index.jsx` (if using React) file.

By default, Webpack will use the following configuration:

```javascript
module.exports = {
  entry: 'src/index.js',
  output: {
    filename: '[name].[hash].js',
    path: 'dist'
  },
  resolve: {
    exntensions: ['.js', '.jsx']
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('production')
      }
    }),
    new webpack.optimize.ModuleConcatenationPlugin(),
    new webpack.optimize.OccurrenceOrderPlugin(),
    new webpack.optimize.UglifyJsPlugin({
      sourcemap: false,
      compress: { drop_console: true }
    }),
    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendor',
      minChunks: module =>
        module.context && module.context.indexOf('node_modules') !== -1
    }),
    new webpack.optimize.CommonsChunkPlugin({
      name: 'manifest'
    })
  ],
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        use: 'babel-loader',
        exclude: /node_modules/
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      },
      {
        test: /\.(woff2?|eot|ttf|svg)$/,
        use: 'url-loader'
      },
      {
        test: /\.(jpe?g|png|gif)$/i,
        loaders: [
          {
            loader: 'file-loader',
            options: {
              hash: 'sha512',
              digest: 'hex',
              name: '[name]-[hash].[ext]'
            }
          },
          {
            loader: 'image-webpack-loader',
            options: {
              gifsicle: {
                interlaced: false
              },
              optipng: {
                optimizationLevel: 7
              },
              pngquant: {
                quality: '65-90',
                speed: 4
              },
              mozjpeg: {
                progressive: true,
                quality: 65
              }
            }
          }
        ],
        exclude: /node_modules/
      }
    ]
  }
};
```

## Overriding the defaults

There are two possible ways to extend or create your Webpack config.

1. Create a file named `webpack.config.js` in your project root.
2. Pass a `--config` argument with your build task.

If you don't know how to create a `webpack.config.js` file, please have a read on the [Webpack][webpack-config] website.

Because Frontwerk's default `webpack.config.js` exports a configuration object, you can extend it in your own config file.

```javascript
const { webpack: webpackConfig } = require('frontwerk/config');
module.exports = Object.assign(webpackConfig, {
  // your overrides here
});
```

**Entry point**

Frontwerk assumes your entry point is `src/index.js(x)`. You can override this by passing the `--entry` flag.

```bash
frontwerk build --pack --entry source/main.js
```

**Destination directory**

Frontwerk assumes your destination directory is `dist`. You can override this by passing the `--output-path` flag.

```bash
frontwerk build --pack --output-path folder
```

**CLI options**

There are a couple of other sensible defaults that you can override:

* `--watch` will watch the files for changes and rebundle as needed
* `--no-clean` will not clean the `dist` directory before bundling

[webpack]: https://webpack.js.org/
[webpack-config]: https://webpack.js.org/concepts/configuration/
