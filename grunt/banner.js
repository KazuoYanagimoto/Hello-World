// Adds a simple banner to files
// https://github.com/mattstyles/grunt-banner
module.exports = {
	banner: '/*! <%= package.name %> - v<%= package.version %> - ' + '<%= grunt.template.today("yyyy-mm-dd") %> */',
	target: {
		options: {
			position: 'top',
			banner: '<%= banner %>',
			linebreak: true
		},
		files: {
			src: ['<%= config.tmp %>/concat/scripts/concat.js']
		}
	}
};
