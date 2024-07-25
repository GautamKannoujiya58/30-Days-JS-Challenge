const path = require("path");

module.exports = {
  entry: "./src/index.js", // Entry file
  output: {
    filename: "bundle.js", // Output bundle file
    path: path.resolve(__dirname, "dist"), // Output directory
  },
  mode: "development", // or 'production'
};
