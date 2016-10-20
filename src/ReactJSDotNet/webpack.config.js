var path = require('path');

module.exports = {
  context: path.join(__dirname, ''),
  entry: {
    client: './js'
  },
  output: {
    path: path.join(__dirname, 'wwwroot/build'),
    filename: '[name].bundle.js'
  },
  module: {
      loaders: [
          {
              test: /\.js$/,
              loader: 'babel-loader',
              exclude: /node_modules/
          }
    ]
  },
  resolve: {
    // Allow require('./blah') to require blah.jsx
    extensions: ['', '.js', '.jsx']
  },
  externals: {
    // Use external version of React (from CDN for client-side, or
    // bundled with ReactJS.NET for server-side)
    react: 'React'
  }
};
