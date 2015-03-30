// Concatenate files.
// https://github.com/gruntjs/grunt-contrib-concat
module.exports = {
	options: {
		banner: '/*! <%= package.name %> - v<%= package.version %> - ' + '<%= grunt.template.today("yyyy-mm-dd") %> */\n',
		sourceMap: true
	},
	target: {
		src: ['<%= config.dev %>/scripts/main.js', '<%= config.dev %>/scripts/sub.js'],
		dest: '<%= config.tmp %>/concat/scripts/<%= package.name %>.js',
		nonull: true
	}
};
