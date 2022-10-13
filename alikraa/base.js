import { Task } from "./main.js";

export const ELEMENTS = {
    HIGH_PRIORITY_LIST: document.getElementById('container__high'),
    LOW_PRIORITY_LIST: document.getElementById('container__low'),
    FORMS: document.querySelectorAll('.add__task'),
    INPUT_TASK_HIGH: document.getElementById('high'),
    INPUT_TASK_LOW: document.getElementById('low')
}

export const STATUSES = {
    TO_DO: 'To Do',
    DONE: 'Done'
}

export const DEFAULT_STATUS = STATUSES.TO_DO;

export const PRIORITIES = {
    HIGH: 'high',
    LOW: 'low'
}

export const list = [
    new Task('Начать делать задачу', STATUSES.TO_DO, PRIORITIES.HIGH),
    new Task('Сверстать этот TODO list', STATUSES.TO_DO, PRIORITIES.HIGH),
    new Task('Почитать книгу', STATUSES.TO_DO, PRIORITIES.LOW)
]

export let high = ELEMENTS.HIGH_PRIORITY_LIST;
export let low = ELEMENTS.LOW_PRIORITY_LIST;
export let empty = '';

export function checkTask(name) {
    return list.find(function (task) {
        return task.name === name;
    })
}