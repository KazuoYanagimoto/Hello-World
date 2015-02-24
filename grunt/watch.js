// Watches files for changes and runs tasks based on the changed files
// https://github.com/gruntjs/grunt-contrib-watch
module.exports = {
	scripts: {
		files: ['<%= config.dev %>/scripts/*.js'],
		tasks: ['uglify:dev']
	},
	styles: {
		files: ['<%= config.dev %>/scss/**/*.scss'],
		tasks: ['compass:dev', 'autoprefixer']
	},
	images: {
		files: ['<%= config.dev %>/images/**/*'],
		tasks: ['imagemin', 'svgmin']
	},
	includes: {
		files: ['<%= config.dev %>/includes/*.html', '<%= config.dev %>/index.html'],
		tasks: ['includes']
	},
	bower: {
		files: ['bower_components/**/*'],
		tasks: ['bower']
	},
	livereload: {
		options: {
			livereload: true
		},
		files: ['<%= config.tmp %>/scripts/*.js', '<%= config.tmp %>/styles/*.css', '<%= config.tmp %>/images/*', '<%= config.tmp %>/index.html']
	}
};
