// Minify HTML.
// https://github.com/gruntjs/grunt-contrib-htmlmin
module.exports = {
	dist: {
		options: {
			collapseBooleanAttributes: true,
			collapseWhitespace: true,
			removeComments: true,
			removeAttributeQuotes: true,
			removeCommentsFromCDATA: true,
			removeEmptyAttributes: true,
			removeOptionalTags: true,
			removeRedundantAttributes: true,
			useShortDoctype: true
		},
		files: {
			'<%= config.dist %>/index.html': ['<%= config.tmp %>/index.html'],
			'<%= config.dist %>/about.html': ['<%= config.tmp %>/about.html'],
			'<%= config.dist %>/contact.html': ['<%= config.tmp %>/contact.html']
		}
	}
};
