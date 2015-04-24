// Watches files for changes and runs tasks based on the changed files
// https://github.com/gruntjs/grunt-contrib-watch
module.exports = {
	fonts: {
		files: ['<%= config.dev %>/fonts/**/*'],
		tasks: ['newer:copy:dev']
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
		tasks: ['newer:uglify:dev']
	},
	styles_main: {
		files: ['<%= config.dev %>/styles/main/**/*.scss'],
		tasks: ['compass:dev', 'autoprefixer:dev']
	},
	styles_vendor: {
		files: ['<%= config.dev %>/styles/vendor/**/*.scss'],
		tasks: ['compass:vendor', 'cssmin:vendor']
	},
	livereload: {
		options: {
			livereload: true
		},
		files: ['<%= config.tmp %>/fonts/**/*', '<%= config.tmp %>/images/**/*', '<%= config.tmp %>/scripts/*.js', '<%= config.tmp %>/styles/*.css', '<%= config.tmp %>/*.html']
	}
};
