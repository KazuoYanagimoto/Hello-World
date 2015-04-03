// Compress CSS files.
// https://github.com/gruntjs/grunt-contrib-cssmin
module.exports = {
	dist: {
		files: {
			'<%= config.tmp %>/styles/global.min.css': ['<%= config.tmp %>/autoprefix/*.css']
		}
	},
	dev: {
		files: {
			'<%= config.tmp %>/styles/vendor.min.css': ['<%= config.dev %>/styles/css/vendors/*.css']
		}
	},
	vendor: {
		files: {
			'<%= config.tmp %>/styles/vendor.min.css': ['bower_components/animsition/dist/css/animsition.css']
		}
	}
};
