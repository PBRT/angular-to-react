// External libs
var webpack = require('webpack')
var path = require('path')

// Put React as a global variable
var providePlugin = new webpack.ProvidePlugin({
  $: 'jquery',
  'window.$': 'jquery',
  'window.jQuery': 'jquery',
  'jQuery': 'jquery',
  'es6-promise': 'es6-promise',
  fetch: 'imports?this=>global!exports?global.fetch!whatwg-fetch'
})

var config = {
  entry: ['./client/app.js'],
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  devtool: 'source-map',
  module: {
    loaders: [
      {
        id: 'jsx',
        test: /\.(js|jsx)?$/,
        loaders: ['babel?presets[]=react,presets[]=es2015,plugins[]=add-module-exports'],
        exclude: /(node_modules)/
      },
      {
        id: 'img',
        test: /\.(png|jpg|svg)?$/,
        loader: 'file-loader',
        exclude: /node_modules/
      },
      {
        id: 'font',
        test: /\.(otf|eot|woff|ttf)$/,
        loader: 'file-loader',
        exclude: /node_modules/
      },
      {
        id: 'style',
        test: /\.(styl|css)$/,
        loader: 'style-loader!css-loader',
        exclude: /(node_modules)/
      },
      {
        id: 'html',
        test: /\.html$/,
        loaders: ['html-loader?root=assets&minimize=false']
      }
    ]
  },
  plugins: [
    providePlugin
  ],
  resolve: {
    modulesDirectories: [
      'node_modules/'
    ]
  }
}

module.exports = config
