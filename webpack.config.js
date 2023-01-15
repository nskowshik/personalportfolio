const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'development',
  //This property defines where the application starts
  entry:'./src/index.js',

  devtool: 'inline-source-map',

  //This property defines the file path and the file name which will be used for deploying the bundled file
  output:{
    path: path.join(__dirname, '/dist'),
    filename: '[name].bundle.js',
     clean: true
  },

  //Setup loaders
  module: {
    rules: [
      {
        test: /\.js$|jsx/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        }
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/i,
        type: 'asset/resource',
      },
      {
        test: /\.(csv|tsv)$/i,
        use: ['csv-loader'],
      },
      {
         test: /\.(ts|tsx)$/,
         exclude: /node_modules/,
         use: ['babel-loader']
       },
       {
         test: /\.(gif|jpg|png|woff|ttf|eot)$/,
         loader: 'file-loader'
       },
       {
         test: /\.svg$/,
         loader: 'svg-react-loader'
      },
      {
        test: /\.css$|.scss/i,
        use: ['style-loader', 'css-loader', 'sass-loader'],
      }
    ]
  },

  // Setup plugin to use a HTML file for serving bundled js files
  plugins: [
    new HtmlWebpackPlugin({
      template: './public/index.html',
      title: 'Development',
    })
  ]
}
