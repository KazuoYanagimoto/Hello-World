// Clear files and folders.
// https://github.com/gruntjs/grunt-contrib-clean
module.exports = {
	options: {
		force: true
	},
	dist: {
		src: ['<%= config.tmp %>/*', '<%= config.dist %>/*']
	},
	server: {
		src: ['<%= config.tmp %>/*']
	},
	all: {
		src: ['./*', '!app/', '!grunt/', '!.editorconfig', '!gitattributes', '!.gitignore', '!jshintrc', '!config.rb', '!Gruntfile.js', '!package.json']
	}
};
