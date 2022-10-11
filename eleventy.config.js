const pluginWebc = require('@11ty/eleventy-plugin-webc')

module.exports = function(eleventyConfig) {
  eleventyConfig.addPlugin(pluginWebc, {
    components: 'src/_includes/**/*.webc',
  })

  return {
    dir: {
      input: "src",
      output: "_site"
    }
  };
}