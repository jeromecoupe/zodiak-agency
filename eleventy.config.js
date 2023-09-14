module.exports = function (eleventyConfig) {
  // ignores
  eleventyConfig.ignores.add("./src/assets/**/*");
  eleventyConfig.watchIgnores.add("./src/assets/**/*");

  // copy
  eleventyConfig.setServerPassthroughCopyBehavior("copy");
  eleventyConfig.addPassthroughCopy({ "./src/_static/**/*": "./" });
  eleventyConfig.addPassthroughCopy("./src/assets/fonts");
  eleventyConfig.addPassthroughCopy("./src/assets/img");

  // server config
  eleventyConfig.setServerOptions({
    port: 3000,
    watch: ["./dist/assets/js/**/*", "./dist/assets/css/**/*"],
  });

  // override base config
  return {
    dir: {
      input: "src",
      output: "./dist",
      markdownTemplateEngine: "njk",
    },
  };
};
