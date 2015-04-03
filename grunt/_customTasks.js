'use strict';

// Custom grunt task(s)
module.exports = function(grunt) {
	// global variables
	var target = grunt.option('target') || 'server'; // --target=staging
	var write = ' >> Please, pass in arguments...';
	var warn = ': You have no arguments!';

	// grunt.registerTask('take', ['compass:' + target]);
	grunt.registerTask('take', 'description', function(which) {
		if (!which) {
			// grunt.task.run(['clean:' + target]);
			grunt.log.writeln(target);
		}
	});

	// cmd:grunt whatsup:target >> You said hi to grunt...
	grunt.registerTask('whatsup', 'Test grunt task with argument.', function(hi) {
		grunt.log.writeln('You said ' + hi + ' to grunt...');
	});

	// cmd:grunt cleanup:taget >> 1 path cleaned.
	grunt.registerTask('cleanups', 'Clean file/dir by passing arguments.', function(which) {
		// set a dynamic alias task
		if (which) {
			grunt.config('clean.all', ['./' + which]);
		}
		// set default task
		grunt.log.writeln('Please, identify file/dir to clean up...');
	});

	// cmd:grunt cleanupall:target1:target2:target3... >> (number of target) paths cleaned.
	grunt.registerTask('cleanupall', 'Clean up multiple targets by passing arguments...', function() {
		var target = Array.prototype.slice.call(arguments, 0).map(function(path){
			return './' + path;
		});
		if (arguments.length > 0) {
			grunt.config('clean.all', target);
		}
		grunt.log.writeln('Please, identify file/dir to clean up...');
	});

	// cmd:grunt cleanupfiles:target1:target2 >> (number of target) paths cleaned.
	grunt.registerTask('cleanupfiles', 'Cleans specific target by passing arguments.', function(dir, file) {
		var argLength = arguments.length;
		if (argLength === 0) {
			// grunt.log.writeln('Please, pass in at least one argument...');
		} else if (argLength === 1) {
			grunt.config('clean.all', ['./' + dir]);
		} else {
			grunt.config('clean.all', ['./' + dir + '/' + file]);
		}
		grunt.log.writeln('Please, identify dir/file to clean up...');
	});

	// cmd:grunt build:target
	grunt.registerTask('build', 'Build task will run dist and connect with target.', function(target) {
		var task = 'dist';
		if (target) {
			grunt.task.run([task, target]);
		} else {
			grunt.task.run([task]);
		}
	});

	// cmd:grunt checkout:target
	grunt.registerTask('checkout', 'Grunt will run jshint by passing target.', function(file) {
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

	// cmd:grunt cleanup:target:task >> 1 path cleaned. Running "task:target" task
	grunt.registerTask('cleanup', 'Grunt will run "clean:target" and runs other task(s)', function(target) {
		var base = 'clean:';
		var argLength = arguments.length;
		if (!target) {
			grunt.log.writeln('Grunt will run "clean:target" and runs other task(s)');
		} else if (argLength === 1) {
			grunt.task.run([base + arguments[0]]);
		} else if (argLength === 2) {
			grunt.task.run([base + arguments[0], arguments[1]]);
		} else if (argLength === 3) {
			grunt.task.run([base + arguments[0], arguments[1] + ':' + arguments[2]]);
		} else if (argLength >= 4) {
			grunt.log.warn('You have passed ' + argLength + ' arguments, you can pass 3 arguments at most...');
		}
	});

	// cmd:grunt please:task:target --target=dist
	grunt.registerTask('please', 'Grunt will run "clean:target" and runs other task(s).', function(which) {
		var base = 'clean:';
		var argLength = arguments.length;
		if (!which) {
			grunt.task.run([base + target]);
		} else if (argLength === 1) {
			grunt.task.run([base + target, arguments[0]]);
		} else if (argLength === 2) {
			grunt.task.run([base + target, arguments[0] + ':' + arguments[1]]);
		} else {
			grunt.log.writeln(this.name + write);
		}
	});

	// cmd:grunt canyou:target >> 1 path cleaned.
	grunt.registerTask('canyou', 'Grunt will run with arguments.', function(task, target) {
		var argLength = arguments.length;
		if (!arguments[0]) {
			grunt.log.writeln(this.name + write);
		} else if (argLength === 1) {
			grunt.task.run([task]);
		} else if (argLength === 2) {
			grunt.task.run([task + ':' + target]);
		} else {
			grunt.log.warn(this.name + warn);
		}
	});

	// Custom logging grunt tasks
	grunt.task.registerTask('devlog', 'Keep appending everthing to a log file.', function(){
		require('logfile-grunt')(grunt, { filePath: 'logs/dev_log/dev.log', clearLogFile: true });
	});
	grunt.task.registerTask('buildlog', 'Create a new release build log files on each run.', function(){
		require('logfile-grunt')(grunt, { filePath: 'logs/build_log/build.log', clearLogFile: false });
	});

};
