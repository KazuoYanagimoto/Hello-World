'use strict';

// Custom grunt task(s)
module.exports = function(grunt) {
	// global variables
	var target = grunt.option('target') || 'server'; // --target=staging
	var write = ' >> Please, pass in arguments...';
	var warn = ': You have no arguments!';

	// cmd:grunt whatsup:target >> You said hi to grunt...
	grunt.registerTask('whatsup', 'Test grunt task with argument.', function(hi) {
		grunt.log.writeln('You said ' + hi + ' to grunt...');
	});

	// cmd:grunt build:server/serve
	grunt.registerTask('build', 'Build task will run dist and connect with target.', function(target) {
		var task = 'dist';
		if (target) {
			grunt.task.run([task, target]);
		} else {
			grunt.task.run([task]);
		}
	});

	// cmd:grunt check:target
	grunt.registerTask('test', 'Grunt will run jshint by passing target.', function(file) {
		var task = 'jshint:grunt';
		if (file) {
			grunt.config('jshint.grunt', ['grunt/' + file + '.js']);
		}
		grunt.task.run([task]);
	});

	// cmd:grunt shallwe:task:target
	grunt.registerTask('shallwe', 'Grunt will run clean task with arguments.', function(task ,target) {
		var base = 'clean:server';
		var argLength = arguments.length;
		if (argLength === 0) {
			grunt.task.run([base]);
		} else if (argLength === 1) {
			grunt.task.run([base, task]);
		} else if (argLength === 2) {
			grunt.task.run([base, task + ':' + target]);
		} else {
			grunt.log.warn('Please, pass in task:target as parameter...');
		}
	});

	// Custom grunt logging tasks
	grunt.task.registerTask('devlog', 'Keep appending everthing to a log file.', function(){
		require('logfile-grunt')(grunt, { filePath: 'logs/dev_log/dev.log', clearLogFile: true });
	});
	grunt.task.registerTask('buildlog', 'Create a new release build log files on each run.', function(){
		require('logfile-grunt')(grunt, { filePath: 'logs/build_log/build.log', clearLogFile: false });
	});

};
