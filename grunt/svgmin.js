// Minify SVG
// https://github.com/sindresorhus/grunt-svgmin
module.exports = {
	dist: {
		files: [{
			expand: true,
			cwd: '<%= config.dev %>/images',
			src: ['**/*.svg'],
			dest: '<%= config.tmp %>/images'
		}]
	}
};
