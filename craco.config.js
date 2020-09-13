const path = require('path');

const resolve = dir => path.resolve(__dirname, dir);

module.exports = {
  webpack: {
    alias: {
      '@': resolve("src"),
      'api': resolve("src/api"),
      'pages': resolve("src/pages"),
      'components': resolve("src/components"),
    }
  },
  devServer: {
    // proxy: {
    //   "/": {
    //     target: "http://localhost:4000",
    //   }
    // }
  }
}