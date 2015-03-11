// Copy files and folders.
// https://github.com/gruntjs/grunt-contrib-copy
module.exports = {
	target: {
		options: {
			nonull: true
		},
		files: [{
			expand: true,
			cwd: '<%= config.tmp %>/scripts/',
			src: ['*.min.js'],
			dest: '<%= config.dist %>/scripts/'
		}, {
			expand: true,
			cwd: '<%= config.tmp %>/styles/',
			src: ['*.min.css'],
			dest: '<%= config.dist %>/styles/'
		}, {
			expand: true,
			cwd: '<%= config.tmp %>/images/',
			src: ['*.{png,jpg,gif}'],
			dest: '<%= config.dist %>/images/'
		}, {
			expand: true,
			cwd: '<%= config.tmp %>/fonts/',
			src: ['*'],
			dest: '<%= config.dist %>/fonts/'
		}]
	},
	dev: {
		files: [
		{
			expand: true,
			cwd: '<%= config.dev %>/fonts/',
			src: ['*'],
			dest: '<%= config.tmp %>/fonts/'
		}]
	}
};
