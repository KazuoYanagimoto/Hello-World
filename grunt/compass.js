// Compile Compass to CSS.
// https://github.com/gruntjs/grunt-contrib-compass
module.exports = {
	options: {
		config: 'config.rb',
		sassDir: '<%= config.dev %>/styles/main',
		cssDir: '<%= config.tmp %>/compass'
	},
	dist: {
		options: {
			environment: 'production',
			outputStyle: 'compress',
			sourcemap: false
		}
	},
	dev: {
		options: {
			environment: 'development',
			outputStyle: 'nested',
			sourcemap: true
		}
	},
	vendor: {
		options: {
			sassDir: '<%= config.dev %>/styles/vendor',
			outputStyle: 'nested',
			sourcemap: false
		}
	}
};
