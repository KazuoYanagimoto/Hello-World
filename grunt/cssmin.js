// Compress CSS files.
// https://github.com/gruntjs/grunt-contrib-cssmin
module.exports = {
	dist: {
		files: {
			'<%= config.tmp %>/styles/global.min.css': ['<%= config.tmp %>/autoprefix/*.css']
		}
	},
	vendor: {
		files: {
			'<%= config.tmp %>/styles/vendor.min.css': ['<%= config.tmp %>/compass/vendor.css']
		}
	},
	bower: {
		files: {
			'<%= config.tmp %>/bower_components/vendor.min.css':
			[
				'bower_components/animsition/dist/css/animsition.min.css'
			]
		}
	}
};
