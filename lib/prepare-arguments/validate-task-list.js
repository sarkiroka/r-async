/**
 * @author sarkiroka on 2016.04.13.
 */
var getType = require('../common/get-type');
module.exports = function validateTaskList(tasks, deep) {
	if (!deep) {
		throw new Error('too deep task signature');
	}
	for (var i = 0; i < tasks.length; i++) {
		var task = tasks[i];
		var typeOfTask = getType(task);
		if (typeOfTask != 'function') {
			if (typeOfTask == 'array') {
				validateTaskList(task, deep - 1);
			} else {
				throw new Error('the task is not a function or an array');
			}
		}
	}
};