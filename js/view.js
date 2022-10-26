export { ELEMENTS, PRIORITY, STATUS, ERROR_LIST, DATE };

const ELEMENTS = {
    themeToggle: document.querySelector('.theme-toggle'),
    iconThemeToggle: document.querySelector('.material-symbols-outlined'),
    taskFormHigh: document.querySelector('.task-high'),
    taskFormLow: document.querySelector('.task-low'),
    taskInputHigth: document.querySelector('.task-input-higth'),
    taskInputLow: document.querySelector('.task-input-low'),
    taskDivHigh: document.querySelector('.task-list-high'),
    taskDivLow: document.querySelector('.task-list-low'),
    taskDiv: undefined,
}

const DATE = {
    START: '',
    FINISH: 'in progress',
    LEAD_TIME: '',
}

const PRIORITY = {
    HIGH: 'high',
    LOW: 'low',
};

const STATUS = {
    TO_DO: 'To Do',
    DONE: 'Done',
};

const ERROR_LIST = {
    ERROR_LISTENER_NOT_FOUND(error) {
        alert("Ошибка: " + error );
    },
    ERROR_EMPTY_ENTER() {
        alert('Пустое поле ввода задачи!');
        ELEMENTS.taskInputHigth.value = '';
        ELEMENTS.taskInputLow.value = '';
        ELEMENTS.taskInputHigth.focus();
    },
};