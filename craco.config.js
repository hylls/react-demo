const path = require('path');

const resolve = dir => path.resolve(__dirname, dir);

module.exports = {
  webpack: {
    alias: {
      '@': resolve("src"),
      'api': resolve("src/api"),
      'components': resolve("src/components"),
    }
  }
}