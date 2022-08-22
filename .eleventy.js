module.exports = function (eleventyConfig) {
  // copy
  eleventyConfig.addPassthroughCopy("./src/assets/img");
  eleventyConfig.addPassthroughCopy("./src/assets/fonts");
  // override base config
  return {
    dir: {
      input: "src",
      output: "./dist",
      markdownTemplateEngine: "njk",
    },
  };
};
