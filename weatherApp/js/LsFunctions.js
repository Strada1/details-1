export function getInfoStorage(value) {
    if (JSON.parse(localStorage.getItem(value))) {
        const task = JSON.parse(localStorage.getItem(value));
        return task;
    }
}
export function recordToStorage(tasks, nameOfTask) {
    const tasksStorage = JSON.stringify(tasks);
    localStorage.setItem(nameOfTask, tasksStorage);
}
