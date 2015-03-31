// Watches files for changes and runs tasks based on the changed files
// https://github.com/gruntjs/grunt-contrib-watch
module.exports = {
	scripts: {
		files: ['<%= config.dev %>/scripts/**/*.js'],
		tasks: ['newer:uglify:dev']
	},
	scss: {
		files: ['<%= config.dev %>/scss/**/*.scss'],
		tasks: ['compass:dev', 'autoprefixer:dev']
	},
	styles: {
		files: ['<%= config.dev %>/styles/**/*.css'],
		tasks: ['cssmin:dev']
	},
	images: {
		files: ['<%= config.dev %>/images/**/*'],
		tasks: ['imagemin', 'svgmin']
	},
	fonts: {
		files: ['<%= config.dev %>/fonts/**/*'],
		tasks: ['copy:dev']
	},
	includes: {
		files: ['<%= config.dev %>/includes/*.html', '<%= config.dev %>/*.html'],
		tasks: ['includes']
	},
	livereload: {
		options: {
			livereload: true
		},
		files: ['<%= config.tmp %>/scripts/*.js', '<%= config.tmp %>/styles/*.css', '<%= config.tmp %>/images/*', '<%= config.tmp %>/*.html']
	}
};
