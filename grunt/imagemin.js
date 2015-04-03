// Minify PNG and JPEG images.
// https://github.com/gruntjs/grunt-contrib-imagemin
module.exports = {
	target: {
		options: {
			optimizationLevel: 3,
			// svgoPlugins:
		},
		files: [{
			expand: true,
			cwd: '<%= config.dev %>/images',
			src: ['**/*.{png,jpg,gif}'],
			dest: '<%= config.tmp %>/images'
		}]
	}
};
