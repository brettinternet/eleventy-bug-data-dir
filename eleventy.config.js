const path = require("path");

module.exports = {
  dir: {
    /**
     * @docs https://www.11ty.dev/docs/config/#input-directory
     * @note it looks like this value _must_ be relative for
     * JS data files to be imported correctly
     */
    // input: "src", // Works!
    input: path.resolve("src"), // Doesn't work!
    /**
     * @docs https://www.11ty.dev/docs/config/#directory-for-global-data-files
     * @note must be a relative path to `input`
     */
    data: "../data",
  },
};
