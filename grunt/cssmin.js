// Compress CSS files.
// https://github.com/gruntjs/grunt-contrib-cssmin
module.exports = {
	dist: {
		files: {
			'<%= config.tmp %>/styles/global.min.css': ['<%= config.tmp %>/autoprefix/*.css'],
			'<%= config.tmp %>/styles/vendor.min.css': ['<%= config.dev %>/styles/**/*.css']
		}
	},
	dev: {
		files: {
			'<%= config.tmp %>/styles/vendor.min.css': ['<%= config.dev %>/styles/**/*.css']
		}
	}
};
