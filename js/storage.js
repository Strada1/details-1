export { tasks, recordToStorage, getFromStorage };

let tasks = [];

// запись списка задач в localStorage
function recordToStorage(tasks) {
    const tasksStorage = JSON.stringify(tasks);
    localStorage.setItem('list', tasksStorage);
}

// извлечение списка задач из localStorage
function getFromStorage() {
    tasks = JSON.parse(localStorage.getItem('list'));
    if(!tasks) {
        tasks = [];
    }
    return tasks;
}
