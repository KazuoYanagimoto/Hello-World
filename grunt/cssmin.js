// Compress CSS files.
// https://github.com/gruntjs/grunt-contrib-cssmin
module.exports = {
	target: {
		files: [{
			expand: true,
			cwd: '<%= config.tmp %>/styles/',
			src: ['*.min.css'],
			dest: '<%= config.tmp %>/cssmin/'
		}]
	}
};
