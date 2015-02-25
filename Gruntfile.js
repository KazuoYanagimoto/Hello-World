'use strict';

module.exports = function(grunt) {
	// Grunt plugin that lets you break up your Gruntfile config by task
	require('load-grunt-config')(grunt);
	// Simple text file logging for Grunt and task output.
	require('logfile-grunt')(grunt);
	// Display the elapsed execution time of grunt tasks
	require('time-grunt')(grunt);
	// Grunt task(s) >> go to grunt\aliases.yaml
};
