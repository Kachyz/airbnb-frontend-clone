const path = require('path')

module.exports = {
  entry: {
    "app": path.resolve(__dirname, 'src/app.js')
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'js/[name].js'
  },
  devServer: {
    port: 9000
  },
  mode: 'development',
  devtool: 'eval-source-map',
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /(node_modules)/,
        use: {
          loader: 'babel-loader', //el encargado de la transpilada
          options: {
            presets: ['es2015', 'react', 'stage-2'] //versiones que podemos soportar y transpilar
          }
        }
      },
      {
        test: /\.css$/,
        use: ['css-loader', 'style-loader']
      },
      {
        test: /\.(jpg|png|gif|svg|gif)$/,
        use: {
          loader: 'url-loader', 
          options: {
            limit: 1000000, //size limit
            fallback: 'file-loader',
            name: 'images/[name].[hash].[ext]'
          }
        }
      }
    ]
  }
}