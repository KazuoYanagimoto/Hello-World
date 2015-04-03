// Compile Sass to CSS.
// https://github.com/gruntjs/grunt-contrib-sass
module.exports = {
	options: {
		require: ['font-awesome-sass', 'bootstrap-sass', 'sass-globbing']
	},
	dist: {
		options: {
			sourcemap: 'none',
			style: 'compressed'
		},
		files: {
			'<%= config.tmp %>/styles/main.css': '<%= config.dev %>/styles/main.scss'
		}
	},
	dev: {
		options: {
			sourcemap: 'auto',
			style: 'nested',
			debugInfo: true
		},
		files: {
			'<%= config.tmp %>/styles/main.css': '<%= config.dev %>/styles/main.scss'
		}
	}
};
