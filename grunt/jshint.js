// Validate files with JSHint.
// https://github.com/gruntjs/grunt-contrib-jshint
module.exports = {
	options: {
		jshintrc: '.jshintrc',
		force: true,
		reporter: require('jshint-stylish')
	},
	target: ['<%= config.tmp %>/scripts/global.min.js'],
	grunt: ['Gruntfile.js', 'grunt/*.js'],
	all: ['./*.js'],
	main: ['<%= config.dev %>/scripts/main.js']
};
