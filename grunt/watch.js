// Watches files for changes and runs tasks based on the changed files
// https://github.com/gruntjs/grunt-contrib-watch
module.exports = {
	fonts: {
		files: ['<%= config.dev %>/fonts/**/*'],
		tasks: ['copy:dev']
	},
	images: {
		files: ['<%= config.dev %>/images/**/*.{png,jpg,gif,svg}'],
		tasks: ['newer:imagemin', 'newer:svgmin']
	},
	includes: {
		files: ['<%= config.dev %>/includes/*.html', '<%= config.dev %>/*.html'],
		tasks: ['includes']
	},
	scripts: {
		files: ['<%= config.dev %>/scripts/**/*.js'],
		tasks: ['uglify:dev']
	},
	styles: {
		files: ['<%= config.dev %>/styles/**/*.scss'],
		tasks: ['compass:dev', 'autoprefixer:dev']
	},
	livereload: {
		options: {
			livereload: true
		},
		files: ['<%= config.tmp %>/fonts/**/*', '<%= config.tmp %>/images/**/*', '<%= config.tmp %>/scripts/*.js', '<%= config.tmp %>/styles/*.css', '<%= config.tmp %>/*.html']
	}
};
