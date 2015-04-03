// Compile Compass to CSS.
// https://github.com/gruntjs/grunt-contrib-compass
module.exports = {
	options: {
		config: 'config.rb',
		sassDir: '<%= config.dev %>/styles',
		cssDir: '<%= config.tmp %>/compass'
	},
	dist: {
		options: {
			environment: 'production',
			outputStyle: 'compress'
		}
	},
	dev: {
		options: {
			environment: 'development',
			outputStyle: 'nested',
			sourcemap: true
		}
	}
};
