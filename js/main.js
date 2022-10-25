import { ELEMENTS, PRIORITY, STATUS, ERROR_LIST } from './view.js';
import { tasks, recordToStorage, getFromStorage } from './storage.js';

// проверка на доступность слушателей событий форм инпутов
try {
    ELEMENTS.taskFormHigh.addEventListener('submit', (event) => addTask(event, PRIORITY.HIGH));
    ELEMENTS.taskFormLow.addEventListener('submit', (event) => addTask(event, PRIORITY.LOW));
} catch(error) {
    ERROR_LIST.ERROR_LISTENER_NOT_FOUND(error);
}

ELEMENTS.themeToggle.addEventListener('click', (event) => handlerThemeToggle(event));

function handlerThemeToggle(event) {
    event.preventDefault();
    if (localStorage.getItem('theme') === 'dark') {
        localStorage.removeItem('theme');
    } else {
        localStorage.setItem('theme', 'dark');
    }
    addDarkTheme();
};

function addDarkTheme() {
    if (localStorage.getItem('theme') === 'dark') {
        document.querySelector('html').classList.add('dark');
        ELEMENTS.iconThemeToggle.textContent = 'dark_mode';
    } else {
        document.querySelector('html').classList.remove('dark');
        ELEMENTS.iconThemeToggle.textContent = 'wb_sunny';
    }
};
      
showTasks();
addDarkTheme();
// showTasks головная фукция запуска показа списка задач: 
// очищает окно браузера перед новым рендерингом, сортирует задачи из списка
// по приоритету и для каждой задачи запускает publishTask
function showTasks() {
    getFromStorage();
// очищает оба High и Low поля
    clearParentDOM(ELEMENTS.taskDivHigh);
    clearParentDOM(ELEMENTS.taskDivLow);
    if(tasks) {
        tasks.forEach(task => { 
            switch (task.priority) {
                case PRIORITY.HIGH:
                    ELEMENTS.taskDiv = publishTask(task);
                    ELEMENTS.taskDivHigh.prepend(ELEMENTS.taskDiv);
                break;
                case PRIORITY.LOW:
                    ELEMENTS.taskDiv = publishTask(task);
                    ELEMENTS.taskDivLow.prepend(ELEMENTS.taskDiv);
                break;   
            }
        });
    }
   
};

function clearParentDOM(element) { 
    if(element.firstChild) {
        element.removeChild(element.firstChild);
        clearParentDOM(element);
    }
    return;
};

// publishTask публикует задачи из списка tasks в окне браузера
function publishTask(task) {
// переводит задачу в статус Done 
    const handlerAddDone = (event) => {
        event.preventDefault();
        task.status = STATUS.DONE;
        recordToStorage(tasks);
        showTasks();
    }
// удаляет задачу
    const handlerDelete = (event) => {
        event.preventDefault();
        const idDel = task.id;
        const tasksFiltered = tasks.filter(task => task.id !== idDel);
        recordToStorage(tasksFiltered);
        showTasks();
    };
    ELEMENTS.taskDiv = document.createElement('div');
    ELEMENTS.taskDiv.classList = task.status === STATUS.DONE
    ? 'task task-done'
    : 'task';
// текст задачи
    const textTask = document.createElement('span');
    textTask.classList = 'task-text';
    textTask.textContent = task.name;
    ELEMENTS.taskDiv.append(textTask);
// чекбокс taskDoneBtn "выполнено"
    const taskDoneBtn = document.createElement('input');
    taskDoneBtn.setAttribute('type', 'radio');
    taskDoneBtn.classList = task.status === STATUS.DONE
    ? 'btn-done checked'
    : 'btn-done';
    taskDoneBtn.addEventListener('click', handlerAddDone);
    ELEMENTS.taskDiv.prepend(taskDoneBtn);
// кнопка taskDeleteBtn "удалить"
    const taskDeleteBtn = document.createElement('button');
    taskDeleteBtn.setAttribute('role', 'button');
    taskDeleteBtn.classList = 'btn-delete';
    taskDeleteBtn.addEventListener('click', handlerDelete);
    ELEMENTS.taskDiv.append(taskDeleteBtn);
    return ELEMENTS.taskDiv;
}

function createNewTask(priority) {
    const newTask = {};
    newTask.id = new Date();
    switch(priority) {
        case PRIORITY.HIGH:
            newTask.name = ELEMENTS.taskInputHigth.value;
            ELEMENTS.taskInputHigth.value = '';
            break;
        case PRIORITY.LOW:
            newTask.name = ELEMENTS.taskInputLow.value;
            ELEMENTS.taskInputLow.value = '';
            break;
    }
    newTask.status = STATUS.TO_DO;
    newTask.priority = priority;
}

function addTask(event, priority) {
    event.preventDefault();
    if(ELEMENTS.taskInputHigth.value.trim() === '' && ELEMENTS.taskInputLow.value.trim() === '') {
        ERROR_LIST.ERROR_EMPTY_ENTER();
        return;
    }
    const newTask = {};
    newTask.id = new Date();
    switch(priority) {
        case PRIORITY.HIGH:
            newTask.name = ELEMENTS.taskInputHigth.value;
            ELEMENTS.taskInputHigth.value = '';
            break;
        case PRIORITY.LOW:
            newTask.name = ELEMENTS.taskInputLow.value;
            ELEMENTS.taskInputLow.value = '';
            break;
    }
    newTask.status = STATUS.TO_DO;
    newTask.priority = priority;
    createNewTask(priority);
    tasks.push(newTask);
    recordToStorage(tasks);
    showTasks();
};
