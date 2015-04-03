// Includes external html file
// https://github.com/vanetix/grunt-includes
module.exports = {
	files: {
		src: ['<%= config.dev %>/*.html'], // Source files
		dest: '<%= config.tmp %>', // Destination directory
		flatten: true,
		cwd: '.',
		options: {
			silent: true,
			includePath: '<%= config.dev %>/includes/'
			// banner: '<!-- source file: <% includes.files.dest %> -->'
		}
	}
};
