const forms = document.querySelectorAll(`.js-form`);

if (forms.length) {
  forms.forEach((form) => {
    const input = form.querySelector(`.js-input`);
    const listContainer = form.querySelector(`.js-list`);

    const taskList = [];

    const status = {
      TODO: `To do`,
      DONE: `Done`,
    };

    const priority = {
      HIGHT: `hight`,
      LOW: `low`,
    };

    function Task(name, priority) {
      this.name = name;
      this.status = status.TODO;
      this.priority = priority;
    }

    function addTask(event) {
      event.preventDefault();
      let taskName = input.value;
      if (taskName == ``) {
        alert(`Please write task name`);
      } else if (form.dataset.formType === `hight`) {
        let task = new Task(taskName, priority.HIGHT);
        taskList.push(task);
      } else {
        let task = new Task(taskName, priority.LOW);
        taskList.push(task);
      }
      render();
      input.value = ``;
      console.log(taskList);
    }

    form.addEventListener(`submit`, addTask);

    function removeTask(event) {
      let taskItem = event.currentTarget.closest(`.js-item`);
      const taskName = taskItem.querySelector(`.js-name`);
      let itemIndex = taskList.findIndex(
        (item) => item.name == taskName.textContent
      );
      if (itemIndex != -1) {
        taskList.splice(itemIndex, 1);
        console.log(`Task '${taskName.textContent}' has been deleted`);
      } else {
        console.log(`Something went wrong`);
      }
      render();
    }

    function changeStatus(event) {
      let taskItem = event.currentTarget.closest(`.js-item`);
      const checkbox = taskItem.querySelector(`input`);
      const taskName = taskItem.querySelector(`.js-name`);

      let itemIndex = taskList.findIndex(
        (item) => item.name == taskName.textContent
      );
      if (itemIndex != -1 && checkbox.checked) {
        taskList[itemIndex].status = status.DONE;
        console.log(
          `Task '${taskName.textContent}' status has been changed to '${status.DONE}'`
        );
        taskItem.classList.add(`todo__item--checked`);
      } else {
        taskItem.classList.remove(`todo__item--checked`);
        console.log(
          `Task '${taskName.textContent}' status has been changed to '${status.TODO}'`
        );
      }

      console.log(taskList);
    }

    function render() {
      listContainer.innerHTML = ``;
      taskList.forEach((taskListElement) => {
        listContainer.insertAdjacentHTML(
          `beforeend`,
          ` <li class="todo__item js-item">
              <label class="todo__label todo__label--task">
                <input class="todo__input" type="checkbox" name="task">
                <span class="todo__name js-name">${taskListElement.name}</span>
              </label>
              <button type="button" class="todo__button todo__button--remove js-remove"></button>
            </li>`
        );
        const taskItems = form.querySelectorAll(`.js-item`);
        taskItems.forEach((taskItem) => {
          const removeButton = taskItem.querySelector(`.js-remove`);
          const checkbox = taskItem.querySelector(`input`);

          removeButton.addEventListener(`click`, removeTask);

          checkbox.addEventListener(`change`, changeStatus);
        });
      });
    }
    render();
  });
}
