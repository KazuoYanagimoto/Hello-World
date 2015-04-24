// Minify files with UglifyJS.
// https://github.com/gruntjs/grunt-contrib-uglify
module.exports = {
	dist: {
		options: {
			compress: {
				drop_console: true
			},
			banner: '\'use strict\';'
		},
		files: {
			'<%= config.tmp %>/scripts/global.min.js': ['<%= config.dev %>/scripts/*.js'],
			'<%= config.tmp %>/scripts/document.min.js': ['<%= config.dev %>/scripts/document/*.js']
		}
	},
	dev: {
		options: {
			beautify: true,
			sourceMap: true,
			banner: '\'use strict\';\n'
			// banner: '/*! <%= package.name %> - v<%= package.version %> */\n'
		},
		files: {
			'<%= config.tmp %>/scripts/global.min.js': ['<%= config.dev %>/scripts/*.js'],
			'<%= config.tmp %>/scripts/document.min.js': ['<%= config.dev %>/scripts/document/*.js']
		}
	},
	vendor: {
		files: {
			'<%= config.tmp %>/scripts/vendor.min.js':
			[
				'bower_components/jquery/dist/jquery.min.js',
				'bower_components/bootstrap/dist/js/bootstrap.min.js',
				'bower_components/animsition/dist/js/jquery.animsition.min.js'
			]
		}
	}
};
