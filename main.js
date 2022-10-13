const ELEMENTS = {
  HIGH_FORM: document.querySelector('#high__form'),
  HIGH_ADD_INPUT: document.querySelector('#high__add-input'),
  LOW_FORM: document.querySelector('#low__form'),
  LOW_ADD_INPUT: document.querySelector('#low__add-input'),
  DELETE_BTN: document.querySelectorAll('.todo__icon-delete'),
  TODO_TASK: document.querySelectorAll('.todo__task'),
  TODO_SPAN: document.querySelectorAll('.todo__name'),
  BODY: document.body,
};
const PRIORITY = {
  LOW: 'low',
  HIGH: 'high',
};
const STATUS = {
  TO_DO: false,
  DONE: true,
};
const list = [
  new Task('Сверстать TODO LIST', STATUS.TO_DO, PRIORITY.HIGH),
  new Task('Купить хлеб', STATUS.TO_DO, PRIORITY.HIGH),
  new Task('Посмотреть ютубчик', STATUS.TO_DO, PRIORITY.HIGH),
  new Task('Прочитать про тихоходок', STATUS.TO_DO, PRIORITY.LOW),
];

function Task(name, status, priority) {
  this.name = name;
  this.status = status;
  this.priority = priority;
}

function addNewTask(task, priority) {
  try {
    let pos = list.findIndex((item) => item.name == task);
    if (pos === -1) {
      list.push(new Task(task, STATUS.TO_DO, priority));
    } else {
      throw new Error('Такая задача уже есть');
    }
    render();
  } catch (err) {
    if (err.name === 'Error') alert(err.message);
  }
}

function checkTask(input, priority) {
  try {
    let newTask = input.value;
    if (newTask === '' || !isNaN(newTask)) {
      throw new Error('Введите корректные данные');
    }
    addNewTask(newTask, priority);
  } catch (err) {
    if (err.name === 'Error') alert(err.message);
  }
}

ELEMENTS.HIGH_FORM.onsubmit = function (event) {
  event.preventDefault();
  checkTask(ELEMENTS.HIGH_ADD_INPUT, PRIORITY.HIGH);
};

ELEMENTS.LOW_FORM.onsubmit = function (event) {
  event.preventDefault();
  checkTask(ELEMENTS.LOW_ADD_INPUT, PRIORITY.LOW);
};
ELEMENTS.BODY.onload = function () {
  render();
};

function deleteTask(task) {
  let pos = list.findIndex((item) => item.name == task);
  if (pos !== -1) {
    list.splice([pos], 1);
  }
  render();
}

function changeStatus(index) {
  list[index].status = !list[index].status;
  render();
}

function render() {
  try {
    document.querySelectorAll('.todo__task').forEach(function (task) {
      task.remove();
    });
    list.map(function (itemTask, index) {
      switch (itemTask.priority) {
        case PRIORITY.HIGH:
          ELEMENTS.HIGH_FORM.insertAdjacentHTML(
            'afterend',
            `<div class="todo__task" ${itemTask.status ? 'style="background-color: #e0b6ea"' : ''}>
            <div class="todo__task-content">
              <label  class="todo__task-text">
                <input class="todo__task-checkbox" onclick = 'changeStatus("${index}")' type="checkbox" ${
              itemTask.status ? 'checked' : ''
            }/>
                <span class="todo__name">
                  ${itemTask.name}
                </span>
              </label>
            </div>
            <button class="todo__icon-delete" onclick = 'deleteTask("${itemTask.name}")'>
              <img src="/details-1/icons/delete-icon.svg" alt="icon" />
            </button>
          </div>`,
          );
          break;
        case PRIORITY.LOW:
          ELEMENTS.LOW_FORM.insertAdjacentHTML(
            'afterend',
            `<div class="todo__task" ${itemTask.status ? 'style="background-color: #e0b6ea"' : ''}>
            <div class="todo__task-content">
              <label  class="todo__task-text">
                <input class="todo__task-checkbox" onclick = 'changeStatus("${index}")' type="checkbox" ${
              itemTask.status ? 'checked' : ''
            }/>
                <span class="todo__name">
                  ${itemTask.name}
                </span>
              </label>
            </div>
            <button class="todo__icon-delete" onclick = 'deleteTask("${itemTask.name}")'>
              <img src="/details-1/icons/delete-icon.svg" alt="icon" />
            </button>
          </div>`,
          );
          break;
      }
    });
  } catch (err) {
    alert(err.message);
  }
}
