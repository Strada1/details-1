import { UI } from "./ui.js";
UI.inputForm.addEventListener('submit', (e) => {
    e.preventDefault();
    newMessage(UI.inputForm.childNodes[1].value);
    UI.inputForm.childNodes[1].value = '';
})

function newMessage(text) {
    let message = UI.template.content.cloneNode(true);
    let div = document.createElement('div');
    div.append(message);
    div.classList.add('message', 'my', 'sent');
    div.childNodes[3].textContent = text;
    const time = div.childNodes[5];
    console.log(time.childNodes);
    const currentDate = new Date();
    time.childNodes[1].textContent = currentDate.getHours();
    time.childNodes[5].textContent = currentDate.getMinutes();

    UI.chatArea.prepend(div);
}