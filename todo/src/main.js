const INPUT_TASK_HIGH = document.querySelector("#input_task_high");
const FORM_HIGH = document.querySelector("#form_high");
const ADD_TASK_HIGH = document.querySelector("#add_task");

const INPUT_TASK_LOW = document.querySelector("#input_task_low");
const FORM_LOW = document.querySelector("#form_low");
const ADD_TASK_LOW = document.querySelector("#add_task_low");


const STATUS = {
    STATUS_IN_PROGRESS: "In Progress",
    STATUS_DONE: "Done",
    STATUS_TO_DO: "To Do",
}

const PRIORITY = {
    PRIORITY_LOW: "low",
    PRIORITY_HIGH: "high",
}

let list = [ { name: 'create a post', status: STATUS.STATUS_IN_PROGRESS, priority: PRIORITY.PRIORITY_HIGH  }]

function myFindIndex (nameTask){
    let result = list.findIndex(item => nameTask === item.name);
    return result;
}

function addTask (nameTask , priorities, statuses = STATUS.STATUS_TO_DO){
    try{
        let result = myFindIndex(nameTask);

        if (result !== -1) {
            alert(`Вы не можете добавить ${nameTask} , так как существует в  ${list.name}`);
            return 0;
        }
        this.name =  nameTask;
        this.status = statuses;
        this.priority = priorities;

    }catch (err) {
        alert(err.message);
    }
}

function changeStatus(nameTask, newStatus) {
    try{
        let result = myFindIndex(nameTask);
        if ( result === -1 ) {
            throw new Error( `Вы не можете поменять статус ${newStatus} , так как не существует` );
        }
        return (list[result].status = newStatus);
    }catch (err) {
        alert(err.message);
    }
}


function inputMyTaskHigh (event){
    try {
        event.preventDefault();
        let value_input = INPUT_TASK_HIGH.value;
        if (value_input.trim() !== "") {
            let newTask = new addTask(value_input,PRIORITY.PRIORITY_HIGH);
            list.push(newTask);
            FORM_HIGH.reset();
            render();
        } else {
            throw new Error("Введите данные")
        }
    } catch (err) {
        alert(err.message);
    }
}

ADD_TASK_HIGH.addEventListener("click", inputMyTaskHigh);
FORM_HIGH.addEventListener('submit',inputMyTaskHigh);

function inputMyTaskLow (event){
    try {
        event.preventDefault();
        let value_input = INPUT_TASK_LOW.value;

        if (value_input.trim() !== "") {
            let newTask = new addTask(value_input,PRIORITY.PRIORITY_LOW);
            list.push(newTask);
            FORM_LOW.reset();
            render();
        } else {
            throw new Error("Введите данные")
        }
    } catch (err) {
        alert(err.message);
    }
}

ADD_TASK_LOW.addEventListener('click',inputMyTaskLow);
FORM_LOW.addEventListener('submit',inputMyTaskLow);

function deleteTask(nameTask){
    let result = myFindIndex(nameTask);
    if ( result === -1 ) {
        console.log( `Вы не можете удалить ${nameTask} , так как не существует` );
    } else {
        list.splice( result, 1 );
    }
    render();
}

function changePriority(nameTask, newPriority) {
    let result = myFindIndex(nameTask);
    if ( result === -1 ) {
        console.log( `Вы не можете поменять приоритет ${newPriority} , так как не существует` );
    } else {
        return (list[result].priority = newPriority);
    }
}

let taskId = 0;

function render(){
    let tasks_high = document.querySelector("#tasks_high");
    let tasks_low = document.querySelector("#tasks_low");

    tasks_high.innerHTML = "";
    tasks_low.innerHTML = "";

    for (let task of list){
        let task_id = "task_id" + taskId;
        if (task.priority === PRIORITY.PRIORITY_HIGH){
            tasks_high.insertAdjacentHTML("afterbegin",
                `
                   <div class="vue-task ` + (task.status === STATUS.STATUS_DONE && PRIORITY.PRIORITY_HIGH?`checked"  ` : `"`) + ` id="${task_id}"> 
                         <div class="check">
                             <input type="checkbox" name="add" ` + (task.status === STATUS.STATUS_DONE && PRIORITY.PRIORITY_HIGH?`checked ` : ``) + `> 
                        </div> 
                            <div class="new-task">
                                 ${task.name}                         
                            </div> 
                            <div class="close"></div>
                    </div>
            `
            )
        }  else  {
            tasks_low.insertAdjacentHTML("afterbegin",
                `
                   <div class="vue-task ` + (task.status === STATUS.STATUS_DONE && PRIORITY.PRIORITY_LOW?`checked"  ` : `"`) + ` id="${task_id}">
                         <div class="check">
                             <input type="checkbox" name="add" ` + (task.status === STATUS.STATUS_DONE && PRIORITY.PRIORITY_LOW?`checked ` : ``) + `> 
                        </div> 
                            <div class="new-task">
                                 ${task.name}                         
                            </div> 
                            <div class="close"></div>
                    </div>
            `
            )
        }

        document.getElementById(task_id).children[2].addEventListener("click", function () {
            deleteTask(task.name);
        });

        document.getElementById(task_id).children[0].addEventListener("change", function () {
            if (task.status === STATUS.STATUS_TO_DO) {
                changeStatus (task.name , STATUS.STATUS_DONE);
                render();
            } else {
                changeStatus (task.name , STATUS.STATUS_TO_DO);
                render();
            }
        })

        taskId++;
    }
}


render();
console.log(list);