import { STATUS, list } from './const.js';

export function Task(name, priority) {
	this.name = name;
	this.status = STATUS.TO_DO;
	this.priority = priority;

	this.addTask = function () {
		return list.add(this)
	}
	
	this.changeStatus = function (task, status) {
		return task.status = status
	}

	this.deleteTask = function (evt, task) {
		if (task.name === evt.target.previousElementSibling.innerText) {
			list.delete(task);
		}
	}

	this.createTask = function (priority, taskList) {
		const task = document.createElement('li');
		const label = document.createElement('label');
		const divCheck = document.createElement('div');
		const span = document.createElement('span');
		const closeBtn = document.createElement('img');

		task.classList.add('item');
		label.classList.add('item-label');
		divCheck.classList.add('check');
		span.classList.add('item-text');
		closeBtn.classList.add('close');
		closeBtn.src = 'css/img/close.png';
		
		priority.prepend(task);
		task.append(label);
		label.append(divCheck);
		label.append(span);
		label.append(closeBtn);
		
		divCheck.addEventListener('click', (evt) => {
			task.classList.toggle('checked');

			if (evt.target.classList.contains('checked')) {
				evt.target.classList.remove('checked');
				this.changeStatus(taskList, STATUS.TO_DO);
			} else {
				evt.target.classList.add('checked');
				this.changeStatus(taskList, STATUS.DONE);
			}			
		})

		closeBtn.addEventListener('click', (evt) => {
			task.remove();
			this.deleteTask(evt, taskList);
		})
		span.textContent = taskList.name

		return task;
	}	
}