const ELEMENTS = {
  addTaskHigh: document.querySelector(".add_task_high"),
  addTaskLow: document.querySelector(".add_task_low"),
  highInput: document.querySelector(".high_input"),
  lowInput: document.querySelector(".low_input"),
  listHigh: document.querySelector(".list_high"),
  listLow: document.querySelector(".list_low"),
};

const PRIORITY = {
  high: "high",
  low: "low",
};

const STATUS = {
  toDo: "status_todo",
  done: "status_done",
};

let list = [
  new AddTask("Изучить новую тему", PRIORITY.high),
  new AddTask("Сверстать этот TODO list", PRIORITY.high),
  new AddTask("Начать делать задачу", PRIORITY.high),
  new AddTask("Посмотреть ютубчик", PRIORITY.low),
];

// Add new task

function AddTask(name, priority) {
  this.name = name;
  this.priority = priority;
  this.status = STATUS.toDo;
};

function addTask(event, newTask, priority) {
  try {
    // const task = new AddTask(newTask.value, priority);

    if (
      newTask.value.trim() != "" &&
      list.findIndex(function (item) {
        return item.name === newTask.value;
      }) === -1
    ) {
      list = [...list, new AddTask(newTask.value, priority)];
    }
    event.preventDefault();
    newTask.value = "";
    render();
  } catch (err) {
    alert(`Ошибка: ${err.message}`);
  }
}

// Add listener for addTask

ELEMENTS.highInput.addEventListener("submit", (event) => {
  addTask(event, ELEMENTS.addTaskHigh, PRIORITY.high);
});

ELEMENTS.lowInput.addEventListener("submit", (event) => {
  addTask(event, ELEMENTS.addTaskLow, PRIORITY.low);
});

// Remove selected task

function deleteTask(task) {
  try {
    if (
      list.findIndex(function (item) {
        return item.name === task;
      }) !== -1
    ) {
      let deleteItem = list.findIndex(function (item) {
        return item.name === task;
      });
      list = list.filter((item) => item !== list[deleteItem]);
    }
    render();
  } catch (err) {
    alert(`Ошибка: ${err.message}`);
  }
}

// Change task status

function changeStatus(task) {
  try {
    if (
      list.findIndex(function (item) {
        return item.name === task;
      }) !== -1
    ) {
      let changeIndex = list.find(function (item) {
        return item.name === task;
      });
      if (changeIndex.status === STATUS.toDo) {
        changeIndex.status = STATUS.done;
      } else {
        changeIndex.status = STATUS.toDo;
      }
    }
    render();
  } catch (err) {
    alert(`Ошибка: ${err.message}`);
  }
}

// Add tasks in HTML

function addHTML(task, position) {
  try {
    let li = document.createElement("li");
    li.classList.add("task_todo");
    position.append(li);

    let label = document.createElement("label");
    li.append(label);

    let input = document.createElement("input");
    input.setAttribute("type", "checkbox");
    input.setAttribute("onclick", `changeStatus("${task.name}")`);
    if (task.status === STATUS.done) {
      input.setAttribute("checked", "");
    }
    label.append(input);

    let p = document.createElement("p");
    p.classList.add("task_name");
    input.after(p);
    let text = document.createTextNode(`${task.name}`);
    p.prepend(text);

    let button = document.createElement("button");
    button.classList.add("btn_exit");
    button.setAttribute("type", "button");
    button.setAttribute("onclick", `deleteTask("${task.name}")`);
    li.append(button);
  } catch (err) {
    alert(`Ошибка: ${err.message}`);
  }
}

// Page update

function render() {
  try {
    let delTasks = document.querySelectorAll(".task_todo");
    delTasks.forEach((item) => {
      item.remove();
    });

    for (let item of list) {
      if (item.priority === PRIORITY.high) {
        addHTML(item, ELEMENTS.listHigh);
      }

      if (item.priority === PRIORITY.low) {
        addHTML(item, ELEMENTS.listLow);
      }
    }

    for (let item of document.querySelectorAll("input[type=checkbox]")) {
      if (item.checked) {
        let li = item.parentNode.parentNode;
        li.classList.add("status_done");
      }
    }
  } catch (err) {
    alert(`Ошибка: ${err.message}`);
  }
}

render();
