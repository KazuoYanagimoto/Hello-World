// Run grunt tasks concurrently
// https://github.com/sindresorhus/grunt-concurrent
module.exports = {
	first: ['compass:dev', 'imagemin', 'svgmin'],
	second: ['uglify:dev']
};
