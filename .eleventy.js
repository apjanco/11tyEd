const sass = require('sass');
const fs = require('fs-extra');

const MarkdownIt = require('markdown-it');
const MarkdownItFootnote = require('markdown-it-footnote');
const MarkdownItAnchor = require('markdown-it-anchor');
const MarkdownItAttrs = require('markdown-it-attrs');
const MarkdownItTOC = require('markdown-it-table-of-contents');

module.exports = function(eleventyConfig) {
  const markdownit = new MarkdownIt({
    html: true,
    linkify: true,
    typographer: true
  }).use(MarkdownItFootnote)
    .use(MarkdownItAttrs)
    .use(MarkdownItAnchor)
    .use(MarkdownItTOC);

  eleventyConfig.setLibrary( 'md', markdownit );
  eleventyConfig.addPassthroughCopy('assets/js/*min.js');
  eleventyConfig.addFilter( 'jsonify', (d) => JSON.stringify(d) );

  eleventyConfig.on('beforeBuild', () => {
    // Compile Sass
    let result = sass.renderSync( {
      file: 'assets/css/style.scss',
      includePaths: ['_sass'],
      sourceMap: false,
      outputStyle: 'expanded',
    });
    console.log('SCSS compiled 💪');
    fs.outputFile('_site/assets/css/style.css', result.css)
  });

  return {
    dir: {
      input: './',
      output: './_site',
      includes: '_includes',
      layouts: '_layouts',
    }
  }
}