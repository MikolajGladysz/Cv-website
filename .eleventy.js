module.exports = function(eleventyConfig){

    eleventyConfig.addPassthroughCopy('./src/styles.css')
    eleventyConfig.addPassthroughCopy('./src/image')
    return {
        dir: {
            input:"src",
            output : "public"
        }
    };
}