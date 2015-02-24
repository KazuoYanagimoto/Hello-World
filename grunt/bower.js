// grunt task to copy bower installed packages to other folder(s)
// https://github.com/curist/grunt-bower
module.exports = {
	target: {
		dest: 'dest/',
		js_dest: 'dest/scripts',
		css_dest: 'dest/styles',
		scss_dest: '<%= config.dev %>/scss/vendors'
	}
};
