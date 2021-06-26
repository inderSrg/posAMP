const HtmlWebPackPlugin = require('html-webpack-plugin')
const path = require('path')

module.exports = {
  mode: 'development',
  entry: './index.js',
  output: {
    path: path.resolve(__dirname, 'public'),
    filename: 'main.js',
    publicPath: '/',
  },
  target: 'node',
  devServer: {
    historyApiFallback: true,
    port: '3000',
    contentBase: ['./public'],
    open: true,
  },
  resolve: {
    extensions: ['.js', '.jsx', '.json'],
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
      // {
      //   test: /\.scss$/,
      //   use: [
      //     require.resolve('style-loader'),
      //     {
      //       loader: require.resolve('css-loader'),
      //       options: {
      //         importLoaders: 1,
      //         modules: true, // Add this option
      //         localIdentName: '[name]__[local]__[hash:base64:5]', // Add this option
      //       },
      //     },
      //     {
      //       loader: require.resolve('postcss-loader'),
      //       options: {
      //         ident: 'postcss',
      //         plugins: () => [
      //           require('postcss-flexbugs-fixes'),
      //           autoprefixer({
      //             browsers: [
      //               '>1%',
      //               'last 4 versions',
      //               'Firefox ESR',
      //               'not ie < 9',
      //             ],
      //             flexbox: 'no-2009',
      //           }),
      //         ],
      //       },
      //     },
      //     {
      //       loader: require.resolve('sass-loader'),
      //       options: {
      //         includePaths: [path.styles],
      //       },
      //     },
      //   ],
      // },
      {
        test: /\.s?css$/,
        use: ['style-loader', 'css-loader', 'sass-loader'],
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader', 'sass-loader'],
      },
      {
        test: /\.(png|j?g|svg|gif)?$/,
        use: 'file-loader',
      },
    ],
  },
  plugins: [
    new HtmlWebPackPlugin({
      template: path.resolve(__dirname, 'public/index.html'),
      filename: 'index.html',
    }),
  ],
}
