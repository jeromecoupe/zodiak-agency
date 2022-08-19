module.exports = function (eleventyConfig) {
  // override base config
  return {
    dir: {
      input: "src",
      output: "./dist",
      markdownTemplateEngine: "njk",
    },
  };
};
