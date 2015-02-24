// Automatic Notifications when Grunt tasks fail
// https://github.com/dylang/grunt-notify
module.exports = {
	connect: {
		options: {
			title: 'Connect server',
			message: 'Failed to connect localhost:9001...'
		}
	}
};
