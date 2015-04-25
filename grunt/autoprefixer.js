// Parse CSS and add vendor-prefixed CSS properties using the Can I Use database. Based on Autoprefixer.
// https://github.com/nDmitry/grunt-autoprefixer
module.exports = {
	options: {
		browsers: ['last 2 versions', 'ie 8', 'ie 9']
	},
	dist: {
		files: [{
			expand: true,
			cwd: '<%= config.tmp %>/compass/',
			src: ['main.css'],
			dest: '<%= config.tmp %>/autoprefix/',
			ext: '.css'
		}]
	},
	dev: {
		options: {
			map: true
		},
		files: {
			'<%= config.tmp %>/styles/global.min.css': ['<%= config.tmp %>/compass/main.css']
		}
	}
};
