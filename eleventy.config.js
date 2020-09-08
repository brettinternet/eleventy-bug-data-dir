const path = require("path");

module.exports = (_config) => {
  return {
    dir: {
      input: path.resolve("src"),
      output: path.resolve("build"),
      data: "../data", // must be a relative path to `input`
    },
  };
};
