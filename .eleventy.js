const { parse } = require("csv-parse/sync")

module.exports = function (eleventyConfig) {
  if (process.env.NODE_ENV === "production") {
    console.log("Building site for production.")
    eleventyConfig.addGlobalData("env", "production")
  } else {
    eleventyConfig.addGlobalData("env", "dev")
    console.log("Building in dev mode.")
  }

  eleventyConfig.addPassthroughCopy("assets")
  eleventyConfig.addPassthroughCopy("./*.png")
  eleventyConfig.addPassthroughCopy("./*.xml")
  eleventyConfig.addPassthroughCopy("./*.txt")
  eleventyConfig.addPassthroughCopy("_redirects")
  eleventyConfig.addPassthroughCopy("favicon.ico")
  eleventyConfig.addPassthroughCopy("site.webmanifest")
  eleventyConfig.addPassthroughCopy("*.vcf")
  eleventyConfig.addWatchTarget("./_site/main.css")

  eleventyConfig.addDataExtension("csv", (contents) => {
    const records = parse(contents, {
      columns: true,
      skip_empty_lines: true,
    })
    return records
  })
  return {}
}
