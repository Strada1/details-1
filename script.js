const list = [];                //массив задач todo листа
const STATUS = {TO_DO:'To Do',  
                DONE:'Done'};              // массив статусов
const PRIORITY = {
    HIGH: "High",
    LOW: "Low"
}
const ELEMENTS = {
    CONTAINERTODO: document.querySelector('.container'),
    HIGHPRIORITYCONTAINER: document.querySelector('#high-priority'),
    LOWPRIORITYCONTAINER: document.querySelector('#low-priority'),
    HIGHINPUTCONTAINER: document.getElementsByClassName('input-container')[0],
    LOWINPUTCONTAINER: document.getElementsByClassName('input-container')[1],
    HIGHTASKFORM: document.getElementsByClassName('form')[0],
    LOWTASKFORM: document.getElementsByClassName('form')[1],
    HIGHPRIORITYINPUT: document.querySelector('#high-priority-input'),
    LOWPRIORITYINPUT: document.querySelector('#low-priority-input'),
    HIGHADDBUTTON: document.querySelector('#high-add-button'),
    LOWADDBUTTON: document.querySelector('#low-add-button'),
}
const ERRORS = {
    NULLSTRING: 'Введите что-нибудь',
    SAMETASK: 'Такая задача уже существует'
}
const nullString = ''

function createTask(element, priority) {
    const i = Date.now();
    if (element.value) {
        const task = {
            id: i, 
            name: element.value, 
            status: STATUS.TO_DO, 
            priority
        };
        list.push(task); 
        if (list.slice(0, -1).find( (item) => item.name === element.value)) {
            alert(ERRORS.SAMETASK)
            list.pop()
            element.value = nullString;   
        }
        element.value = nullString;  
        render();
    } else {
        alert(ERRORS.NULLSTRING);
    }
}
// почему не работает ? element === (ELEMENTS.HIGHADDBUTTON || ELEMENTS.LOWADDBUTTON)
const addTask = (event, element) => {
    if (element === ELEMENTS.HIGHADDBUTTON || element === ELEMENTS.LOWADDBUTTON) {
        const button = element === ELEMENTS.HIGHADDBUTTON ? ELEMENTS.HIGHPRIORITYINPUT : ELEMENTS.LOWPRIORITYINPUT;
        const priority = element === ELEMENTS.HIGHADDBUTTON ? PRIORITY.HIGH : PRIORITY.LOW 
        createTask(button, priority);
        return;
    } else {
        const form = element === ELEMENTS.HIGHTASKFORM ? ELEMENTS.HIGHTASKFORM : ELEMENTS.LOWTASKFORM
        const priority = element ===  ELEMENTS.HIGHTASKFORM ? PRIORITY.HIGH : PRIORITY.LOW
        createTask(form, priority);
    }
}

const clickHandler = (event) => {
    event.preventDefault();
    const isHighPriorityTask = event.target.closest('#high-priority')
    addTask(event, isHighPriorityTask ? ELEMENTS.HIGHADDBUTTON : ELEMENTS.LOWADDBUTTON)
}

const submitHandler = (event) => {
    event.preventDefault();
    const isHighPriorityTask = event.target.closest('#high-priority')
    addTask(event, isHighPriorityTask ? ELEMENTS.HIGHTASKFORM : ELEMENTS.LOWTASKFORM)
}

ELEMENTS.HIGHADDBUTTON.addEventListener('click', clickHandler)
ELEMENTS.LOWADDBUTTON.addEventListener('click', clickHandler)
ELEMENTS.HIGHTASKFORM.addEventListener('submit', submitHandler)
ELEMENTS.LOWTASKFORM.addEventListener('submit', submitHandler)

function changeStatus(name, i) {
    const checkbox = document.querySelector(`#checkbox${i}`)
    for (let i = 0;  i < list.length; i++) {
        if (list[i].id === name) {
            const status = checkbox.checked ? list[i].status = STATUS.DONE : list[i].status = STATUS.TO_DO
            render();
        }              
    } 
}

function removeTask(name, i) {
    const button = ELEMENTS.CONTAINERTODO.querySelector(`#button${i}`);
    const div = document.querySelector(`#task-outer${i}`).remove();
    for (let i = 0;  i < list.length; i++) {
        if (list.find(item => item.id === name)) {
            list.splice(list.findIndex(item => item.id === name, 0), 1);
        }
    }
    render();
}

function render() {
    const deleteTask = document.querySelectorAll('.task-todo');
    deleteTask.forEach(function(item) {
        item.remove()
    });
    for (let i = 0;  i < list.length; i++) {
        const priorityTask = list[i].priority === PRIORITY.HIGH ? ELEMENTS.HIGHINPUTCONTAINER : ELEMENTS.LOWINPUTCONTAINER
        priorityTask.insertAdjacentHTML('afterend', `
        <div class='task-todo' id="task-outer${i}">
            <div class="text-container">
                <input ${list[i].status === STATUS.DONE ? "checked" : nullString} onchange="changeStatus(${list[i].id}, ${i})" class="checkbox" type="checkbox" id="checkbox${i}" name="checkbox${i}"> 
                <label for="checkbox${i}" class="texttask">${list[i].name}</label>      
                <button onclick="removeTask(${list[i].id}, ${i})" id="button${i}"> <img src="./img/close-icon.svg"> </button>
            </div>
        </div>
        `); 
    }
}