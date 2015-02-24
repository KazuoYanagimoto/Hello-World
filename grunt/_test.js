'use strict';

module.exports = function(grunt) {
	// template
	grunt.registerTask('!', 'Grunt will run jshint by passing target.', function(file) {
		var task = 'jshint:grunt';
		if (file) {
			grunt.config('jshint.grunt', ['grunt/' + file + '.js']);
		}
		grunt.task.run([task]);
	});

	// Multi task(s)
	grunt.registerMultiTask('logger', 'Log out data:name to console.', function() {
		grunt.log.writeln(this.target + ':' + this.data);
	});

	// grunt configuration
	grunt.registerTask('config', 'Grunt configuration tasks', function() {
		grunt.config.get('clean');
	});

	// Dynamic Alias Tasks
	grunt.registerTask('talkto', 'Grunt will run with passing arguments.', function(which) {
		var task = 'clean';
		if (which) {
			task += ':' + which;
		}
		grunt.task.run([task]);
	});

	// Async Dynamic Alias Task
	grunt.registerTask('bringup', 'Grunt will run as async with passing arguments.', function(which) {
		// Instruct this task to wait until we call the done() method to continue.
		var done = this.async();
		// Run 'git rev-parse HEAD' to get the SHA
		grunt.util.spawn({
			cmd: 'git',
			args: ['rev-parse', 'HEAD']
		}, function(err, sha, stderr){
			// TODO: handle error

			// Alter the config to include the SHA in the destination file names
			grunt.config('concat.target.dest', ['.tmp/concat/scripts/' + sha + '.js']);
			// Schedule tasks to run immediately after this one
			var task = 'concat';
			if (which) {
				task += ':' + which;
			}
			// Set default task
			grunt.task.run(['clean:server', task]);
			// All done, continue to the next tasks
			done();
		});
	});

	// Test grunt task(s) with asynchronous function
	grunt.registerTask('asyncfoo', 'My "asyncfoo" task.', function() {
		var target = grunt.option('target') || 'dev'; // --target=staging
		// Force task into async mode and grab a handle to the "done" function.
		// var done = this.async();
		// Run some sync stuff.
		if (arguments.length === 1) {
			grunt.task.run(['clean:server', arguments[0] ]);
		} else if (arguments.length === 2) {
			grunt.task.run(['clean:server', arguments[0] + ':' + arguments[1] ]);
			// And some async stuff.
			/*setTimeout(function() {
				grunt.log.writeln('All done!');
				done();
			}, 1000);*/
		} else if (arguments.length === 3) {
			grunt.task.run(['clean:server', arguments[0] + ',' + arguments[1] + ',' + arguments[2] ]);
		}
		else {
			grunt.log.writeln('You have passed ' + arguments.length + ' arguments...');
		}
	});

	// Test grunt task(s) with multiple arguments
	grunt.registerTask('letme', 'Grunt tasks will run with checking arguments.', function() {
		var argLen, argNum;
		argLen = arguments.length;
		/*for (var i = 0; i < arguments.length; i++) {
			argNum = arguments[i];
			grunt.log.writeln('Arguments:' + argNum);
		}*/
		grunt.log.writeln('List of arguments:' + arguments[0] + '/' + arguments[1] + '/' + arguments[2] + '/' + arguments[3]);
		grunt.log.writeln('You have total:' + argLen + ' arguments...');
		grunt.task.run(['clean:server', arguments[0] + ':' + arguments[1]]);
		// grunt.log.writeln('First argument is :' + argNum[1]);
		// argNum = arguments[i];
		/*if (argLen === 0) {
			grunt.log.writeln('Please, pass in at least one arguments...');
		} else if (argLen === 1) {
			grunt.log.writeln('You have one argument passed...');
		} else {
			grunt.log.writeln('You have multiple arguments passed...');
		}*/
	});

	// Test grunt task(s) with variable arguments
	grunt.registerTask('count', 'Grunt task will run with checking each arguments.', function(join) {
		var args = Array.prototype.slice.call(arguments);
		// return args.join(concat);
		grunt.log.writeln(args.join(':'));
	});

	// Test grunt task(s) with variable arguments
	grunt.registerTask('listall', 'Grunt task will run with multiple arguments.', function(n) {
		// var result =
		var args = Array.prototype.slice.call(arguments);
	});

	// Test grunt task(s) including 'dist'
	grunt.registerTask('#', 'Grunt task will run with option.', function(task1, target1) {
		// grunt please:sass:dev --target=dist
		var target = grunt.option('target') || 'server'; // --target=staging
		if (arguments.length === 0) {
			grunt.task.run(['clean:' + target]);
		} else if (arguments.length === 1) {
			grunt.task.run(['clean:' + target, task1]);
		} else {
			grunt.task.run(['clean:' + target, task1 + ':' + target1]);
		}
	});

	// Test grunt config.options
	grunt.registerTask('cani', 'Grunt task will run with option.', function() {
		// grunt cani:compass --target=dist
		var target = grunt.option('target') || 'dev';
		// grunt.task.run(['clean:server', arg1 + ':' + target]);
		grunt.task.run(['clean:server', 'compass:' + target]);
	});

	// Test grunt.option(default)
	// var target = grunt.option('target') || 'dev'; // --target=staging
	// grunt.registerTask('take', ['compass:' + target]);

	// Test grunt.option within task(s)
	grunt.registerTask('force', 'Force grunt tasks...', function(n) {
		var target = grunt.option('target');
		grunt.log.writeln('This is message from - ' + target );
	});
	// Call 'force' task
	grunt.registerTask('command', ['force']);

	// Test grunt tasks with async()
	grunt.registerTask('sassy', 'Grunt task will run by checking argument', function(which) {
		// Instruct this task to wait until we call the done() method to continue
		var done = this.async();
		// Run 'git status' to get current status
		grunt.util.spawn({
			// cmd: 'git',
			// args: ['status']
			cmd: 'grunt',
			args: ['console']
		}, function(err, sha, stderr) {
			// Handle error

			// Alter the config to include the status

			// Schedule tasks to run immediately after this one
			var task = 'sass:dev';
			if (which) task = 'sass:' + which;
			grunt.task.run(['clean:server', task]);
			// All done, continue to the next tasks
			done();
		});
	});

	// Test grunt.option
	grunt.option.init(['dev']);
	// var target = grunt.option('target') || 'dev';
	var target = grunt.option('target');
	grunt.registerTask('deploy', ['clean:server', 'compass:' + target]);

	// Test grunt.option within tasks
	grunt.registerTask('act', 'description', function() {
		var target = grunt.option('target') || 'dev';
		grunt.task.run(['clean:server', 'sass:' + target]);
	});

	// Custom grunt tasks
	grunt.registerTask('serve', 'start the server and preview app', function() {
		grunt.log.writeln('Started running "serve" tasks...');
		grunt.task.run(['connect:server', 'notify:connect', 'watch']);
	});
	grunt.registerTask('hello', 'this will log message1', function() {
		grunt.log.write('hello');
	});
	grunt.registerTask('world', 'this will log message2', function() {
		grunt.task.requires('hello');
		grunt.log.writeln('world');
	});
	grunt.registerTask('console', 'this will console both message', function() {
		grunt.log.writeln('All tasks processing...');
		grunt.task.run(['hello', 'world']);
	});
	grunt.registerMultiTask('log', 'log stuff', function() {
		grunt.log.writeln(this.target + ': ' + this.data);
	});
	grunt.registerTask('how', 'my foo task', function() {
		grunt.task.run(['log']);
	});
	grunt.registerTask('sync', 'my sync task', function() {
		var done = this.async();
		grunt.log.writeln('Processing task...');
		grunt.task.run(['foo']);
		setTimeout(function(){
			grunt.log.writeln('All done!');
			done();
		}, 3000);
	});
	grunt.registerTask('foo', 'My foo task', function() {
		grunt.log.writeln('foo');
	});
	grunt.registerTask('bar', 'My bar task', function() {
		grunt.task.requires('foo');
		grunt.log.writeln('bar');
	});
	grunt.registerTask('lets', 'Logs both tasks', function(arg1, arg2) {
		// grunt.task.run(['foo', 'bar']);
		grunt.task.run([arg1, arg2]);
	});

	// Basic settings for logging grunt task
	// require('logfile-grunt')(grunt, { filePath: '/.logs/'});
	// require('logfile-grunt')(grunt, { filePath: './logs/MyCustomLogs.txt' });

	// Custom logging grunt tasks
	grunt.task.registerTask('devlog', 'Keep appending everthing to a log file.', function(){
		require('logfile-grunt')(grunt, { filePath: 'logs/dev_log/dev.log', clearLogFile: true });
	});
	grunt.task.registerTask('buildlog', 'Create a new release build log files on each run.', function(){
		require('logfile-grunt')(grunt, { filePath: 'logs/build_log/build.log', clearLogFile: false });
	});
	// Check custom grunt tasks
	grunt.registerTask('mylog', ['devlog']);
	grunt.registerTask('newlog', ['buildlog']);
	grunt.registerTask('logit', ['mylog', 'newlog']);

	// Custom grunt callback task
	grunt.registerTask('alldone', 'This is callback task to for the grunt tasks', function() {
		grunt.log.writeln('Log file is created ./logs');
	});
	grunt.registerTask('callback', ['console', 'alldone']);

	// Test custom loggging tasks
	grunt.registerTask('pre', 'Use this to check custom grunt tasks.', function() {
		// var task = 'devlog';
		// grunt.task.requires(task);
		// grunt.log.writeln('You need --' + task + '-- task to proceed...');
		grunt.task.run(['devlog', 'buildlog', 'server']);
	});

	// Test custom nodeunit task
	grunt.registerTask('test', 'Test js file using nodeunit', function() {
		var tests = Array.prototype.slice.call(arguments, 0).map(function(file){
			return 'tests/' + file + '_test.js';
		});
		if(tests.length > 0) { grunt.config('nodeunit.all', tests); }
		grunt.task.run(['nodeunit']);
	});

	// Custom function for jshint
	function lastModified(min){
		return function(filepath){
					// When the file was modified
					var fileMod = (require('fs').statSync(filepath)).mtime;
					// One day ago
					var dayAgo = (new Date()).setDate((new Date()).getDate()-1);
					// If the file was modified within a day, give to the task. Otherwise filter it out
					return (fileMod > dayAgo);
				};
	}

	// Custom function for copy:log
	function renameFile(dest, src){
		var path = require('path');
		// Get the name of the component folder (or first folder in src path)
		var component = src.split(path.sep).slice(0, 1)[0];
		// Prefix each javascript file with the component folder name into the destination
		return path.join(dest, component + '_' + path.basename(src));
	}

	// logging target:data:name
	grunt.registerMultiTask('logger', 'Grunt will log out data:name for you.', function(target) {
		grunt.task.run(['log:foo', 'log:bar', 'log:baz']);
	});
};
