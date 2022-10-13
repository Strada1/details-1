import { PRIORITY, list, forms, priorityHigh, priorityLow } from './const.js';
import { Task } from './task.js';

forms.forEach((form) => {
	form.addEventListener('submit', (evt) => {
		evt.preventDefault();
		
		try {
			if (evt.target.className === 'high') {
				new Task(evt.target[0].value, PRIORITY.HIGH).addTask();
				evt.target[0].value = '';
			} else {
				new Task(evt.target[0].value, PRIORITY.LOW).addTask();
				evt.target[0].value = ''
			}
		} catch (error) {
			console.log(error.message)
		}
		render()
	} )
})

function render() {
	document.querySelectorAll('.item').forEach(task => task.remove());

	Array.from(list).map((task) => {
		if (task.priority === PRIORITY.HIGH) {
			new Task().createTask(priorityHigh, task)
		} else {
			new Task().createTask(priorityLow, task)
		}
	})
}