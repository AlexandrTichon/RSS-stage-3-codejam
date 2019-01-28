const path = require('path');
const WebpackCleanPlugin = require('webpack-clean-plugin');

module.exports = {
  devtool: 'source-map',
  entry: {
    poets: './src/findPoets.js',
    poet: './src/poet.js',
    translateMain: './src/components/translate/translateMain.js',
  },
  output: {
    path: path.join(__dirname, 'build'),
    filename: '[name].js',
    publicPath: '/build/',
  },
  mode: 'development',
  module: {
    rules: [
      {
        test: /.(m?js|jsx)$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'babel-loader',
            options: { presets: ['@babel/preset-env', '@babel/preset-react'] },
          },
        ],
      },
      {
        test: /\.scss$/,
        exclude: /node_modules/,
        use: ['style-loader', 'css-loader', 'sass-loader'],
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.js$/,
        exclude: ['/node_modules/', '/build/'],
        use: ['eslint-loader'],
      },
      {
        test: /\.(png|jpg|gif)$/i,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 9999,
            },
          },
        ],
      },
    ],
  },
  resolve: {
    extensions: ['.js', '.jsx'],
  },
  plugins: [
    new WebpackCleanPlugin(['build']),
  ],
  devServer: {
    contentBase: './src',
    hot: true,
    port: 3000 || 8080,
    historyApiFallback: true,
  },
};
