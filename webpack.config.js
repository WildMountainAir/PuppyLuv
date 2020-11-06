module.exports = {
  mode: 'development',
  entry: `${__dirname}/src/index.jsx`,
  module: {
      rules: [
          {
              test: [/\.jsx$/],
              exclude: /node_modules/,
              use: {
                  loader: 'babel-loader',
                  options: {
                      presets: ['@babel/preset-env', '@babel/preset-react'],
                  },
              },
          },
      ],
  },
  resolve: { extensions: ['.js', '.jsx'] },
  output: {
      filename: 'bundle.js',
      path: `${__dirname}/public`,
  },
};