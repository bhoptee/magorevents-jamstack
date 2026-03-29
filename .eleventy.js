const markdownIt = require("markdown-it");
const md = markdownIt({ html: true, breaks: true });

module.exports = function (eleventyConfig) {
  // Static asset passthrough
  eleventyConfig.addPassthroughCopy("src/img");
  eleventyConfig.addPassthroughCopy("src/fonts");
  eleventyConfig.addPassthroughCopy("src/css");
  eleventyConfig.addPassthroughCopy("src/js");
  eleventyConfig.addPassthroughCopy("src/admin");

  // Markdown filter for CMS-managed rich text fields
  eleventyConfig.addFilter("md", (content) => {
    if (!content) return "";
    return md.render(content);
  });

  // Current year shortcode for footer copyright
  eleventyConfig.addShortcode("year", () => `${new Date().getFullYear()}`);

  return {
    dir: {
      input: "src",
      output: "_site",
      includes: "_includes",
      data: "_data",
    },
    templateFormats: ["njk", "html", "md"],
    htmlTemplateEngine: "njk",
    markdownTemplateEngine: "njk",
  };
};
