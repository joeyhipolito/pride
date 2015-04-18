/**
 * gulpfile.js
 * ===========
 * Instead of managing one huge configuration file, breakdown tasks to its own
 * file in gulp/tasks and automatically require them below.
 *
 * To create a new task, simply create a new task file to gulp/tasks
 */

var requireDir = require('require-dir');

// require all tasks in gulp/tasks, including subfolders
requireDir('./gulp/tasks', { recurse: true });

