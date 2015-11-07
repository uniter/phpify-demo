module.exports = {
  context: __dirname,
  entry: './index',
  module: {
    loaders: [
      {
        test: /\.json$/,
        loader: 'json-loader'
      },
      {
        test: /\.php$/,
        loader: 'transform?phpify'
      }
    ]
  },
  output: {
    path: 'dist/',
    filename: 'bundle.js'
  }
};
