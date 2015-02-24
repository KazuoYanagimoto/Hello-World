// Parse CSS and add vendor-prefixed CSS properties using the Can I Use database. Based on Autoprefixer.
// https://github.com/nDmitry/grunt-autoprefixer
module.exports = {
	options: {
		browsers: ['last 2 versions', 'ie 8', 'ie 9'],
		map: true
	},
	target: {
		files: [{
			expand: true,
			cwd: '<%= config.tmp %>/compass/',
			src: ['*.css', '!*.min.css'],
			dest: '<%= config.tmp %>/styles/',
			ext: '.min.css'
		}]
	}
};
