// Connect to localhost:
// https://github.com/gruntjs/grunt-contrib-connect
module.exports = {
	options: {
		port: 9001,
		hostname: 'localhost',
		livereload: true,
		open: true
		// open: {
		// 	target: 'https://localhost:9001'
		// }
	},
	server: {
		options: {
			base: '<%= config.tmp %>'
		}
	},
	dist: {
		options: {
			base: '<%= config.dist %>',
			keepalive: true
		}
	}
};
