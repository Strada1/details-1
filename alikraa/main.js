import { ELEMENTS, STATUSES, DEFAULT_STATUS, PRIORITIES, high, low, empty, list, checkTask } from './base.js'

for (let form of ELEMENTS.FORMS) {
    form.addEventListener('submit', function () {
        if (ELEMENTS.INPUT_TASK_HIGH.value !== empty) {
            addTask(ELEMENTS.INPUT_TASK_HIGH.value, PRIORITIES.HIGH)
            ELEMENTS.INPUT_TASK_HIGH.value = empty;
        } else if (ELEMENTS.INPUT_TASK_LOW.value !== empty) {
            addTask(ELEMENTS.INPUT_TASK_LOW.value, PRIORITIES.LOW)
            ELEMENTS.INPUT_TASK_LOW.value = empty;
        }
        event.preventDefault();
    })
}

function render() {
    high.innerHTML = empty;
    low.innerHTML = empty;

    return list.forEach(function (task) {
        if (task.priority === 'high') {
            let div = document.createElement('div');
            div.className = 'task__content';
            div.innerHTML = `<div class="task__text">
                <label>
                <input type="checkbox" class="task__status" ${task.status === STATUSES.DONE ? 'checked' : ''}>
                <span class="custom__checkbox"></span>
                    ${task.name}
                </label>
            </div>`;

            high.prepend(div);

            let deleteButton = document.createElement('button');
            deleteButton.className = 'delete__task';
            deleteButton.innerHTML = '<img src="img/delete.svg" alt="Delete Task">';
            div.append(deleteButton);

            deleteButton.addEventListener('click', function () {
                div.remove();
                deleteTask(task.name);
            })

            let checkbox = document.querySelectorAll('.task__status');
            for (let check of checkbox) {
                check.addEventListener('click', function () {
                    if (check.checked) {
                        changeStatus(task.name, STATUSES.DONE);
                    } else {
                        changeStatus(task.name, STATUSES.TO_DO);
                    }
                })
            }

        } else if (task.priority === 'low') {
            let div = document.createElement('div');
            div.className = 'task__content';
            div.innerHTML = `<div class="task__text">
                <label>
                <input type="checkbox" class="task__status" ${task.status === STATUSES.DONE ? 'checked' : ''}>
                <span class="custom__checkbox"></span>
                    ${task.name}
                </label>
            </div>`;

            low.prepend(div);

            let deleteButton = document.createElement('button');
            deleteButton.className = 'delete__task';
            deleteButton.innerHTML = '<img src="img/delete.svg" alt="Delete Task">';
            div.append(deleteButton);

            deleteButton.addEventListener('click', function () {
                div.remove();
                deleteTask(task.name);
            })

            let checkbox = document.querySelectorAll('.task__status')
            for (let check of checkbox) {
                check.addEventListener('click', function () {
                    if (check.checked) {
                        changeStatus(task.name, STATUSES.DONE);
                    } else {
                        changeStatus(task.name, STATUSES.TO_DO);
                    }
                })
            }
        }
    })
}

export function Task(task, priority) {
    this.name = task;
    this.status = DEFAULT_STATUS;
    this.priority = priority;
}

function addTask(name, priority) {
    try {
        const newTask = new Task(name, priority)
        const task = checkTask(name);

        if (task) {
            throw new Error('Ошибка: такая задача уже есть в списке!')
        } else {
            list.push(newTask);
        }
    } catch (error) {
        alert(error.message)
    }
    render();
}

function deleteTask(name) {
    try {
        const removeTask = list.findIndex(function (item) {
            return item.name === name;
        });

        if (removeTask >= 0) {
            list.splice(removeTask, 1);
        } else {
            throw new Error('Ошибка: задача не найдена!');
        }
    } catch (error) {
        alert(error.message)
    }
    render();
}

function changeStatus(name, status) {
    try {
        const newStatus = checkTask(name);

        if (newStatus) {
            newStatus.status = status;
        } else {
            throw new Error('Ошибка: задача не найдена!');
        }
    } catch (error) {
        alert(error.message)
    }
    render();
}

render();