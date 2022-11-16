import { settingsButton, popup, closeButton, inputWriteMessage, windowChat, mainForm } from '/values.js'

mainForm.addEventListener("submit", function (event) {
    event.preventDefault();
    inputWriteMessage.value = '';
});

settingsButton.addEventListener("click", function () {
    popup.classList.toggle('active');
});

closeButton.addEventListener("click", function () {
    popup.classList.remove('active');
});

inputWriteMessage.addEventListener("change", function () {
    const divMessage = document.createElement('div');
    const divDate = document.createElement('div');
    const date = new Date();
    divDate.textContent = `${date.getHours()}:${date.getMinutes()}`;
    divMessage.className = "message_item";
    divDate.className = "message_time";
    divMessage.textContent = inputWriteMessage.value.trim();
    windowChat.prepend(divMessage);
    divMessage.append(divDate);
});