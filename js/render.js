import { UI, DATE_FORMAT, COLOR_THEME } from "./view.js";
export { renderCurrentMessage, renderMyMessage, renderOutMessage, renderPeriod, dateFormation };

function renderCurrentMessage(message) {
    const renderMyMessage = document.createElement('div');
    renderMyMessage.classList = ('my-message theme');
    renderMyMessage.innerText = message;
    UI.CHAT.CONTAINER.append(renderMyMessage);
    const dataTime = document.createElement('span');
    dataTime.classList = ('data-mytime');
    const timeMessage = timeFormation();  
    dataTime.innerText = timeMessage;
    renderMyMessage.append(dataTime);
    UI.CHAT.CONTAINER.prepend(renderMyMessage);
    renderMyMessage.scrollIntoView();
    UI.CHAT.MESSAGE.value = '';
    UI.CHAT.MESSAGE.focus();
    console.log(renderMyMessage);
    return renderMyMessage;
}

function renderMyMessage(message) {
    const renderMyMessage = document.createElement('div');
    renderMyMessage.classList = ('my-message theme');
    renderMyMessage.innerText = message.text;
    const dataTime = document.createElement('span');
    dataTime.classList = ('data-mytime');
    const timeMessage = timeFormation(message.createdAt);
    dataTime.innerText = timeMessage  + ' ' + ' ✔';
    renderMyMessage.append(dataTime);
    UI.CHAT.CONTAINER.prepend(renderMyMessage);
    renderMyMessage.scrollIntoView();
}

function renderOutMessage(message, chatMembers) {
    const renderOutMessage = document.createElement('div');
    renderOutMessage.classList = ('message-wrapper');
    const nikImg = document.createElement('img');
    nikImg.classList = ('nik-img');
    const randomNumber = Math.floor(Math.random() * 9 + 1);
    const backgroundColor = `color${randomNumber}`;
    nikImg.style.border = `1px solid rgb(12, 16, 28)`;
    const randomNik = Math.floor(Math.random() * 5 + 1);
    nikImg.src = `./images/icon_members/nik${randomNik}.png`;
    const messageTheme = document.createElement('div');
    messageTheme.classList = ('incoming-message theme');
    const nikFrom = document.createElement('span');
    nikFrom.classList = ('nik-from');
    nikFrom.innerText = message.user.name;
    nikFrom.style.color = COLOR_THEME[backgroundColor];
    chatMembers.forEach(member => {
        if(message.user.email === member.name) {
            nikImg.src = `./images/icon_members/${member.icon}.jpg`;
            nikImg.style.border = `1px solid rgb(12, 16, 28)`;
            nikFrom.style.color = member.color;
            return;      
        } 
    });   
    const messageText = document.createElement('span');
    messageText.classList = ('message-text');
    messageText.innerText = message.text;
    const dataTime = document.createElement('span');
    dataTime.classList = ('data-time');
    const timeMessage = timeFormation(message.createdAt);
    dataTime.innerText = timeMessage;
    messageTheme.append(nikFrom);
    messageTheme.append(messageText);
    messageTheme.append(dataTime);
    renderOutMessage.append(nikImg);
    renderOutMessage.append(messageTheme);
    UI.CHAT.CONTAINER.prepend(renderOutMessage);
    renderOutMessage.scrollIntoView();
}

function renderPeriod(dateForRender) {
    const renderDate = document.createElement('div');
    renderDate.classList = ('date-message');
    renderDate.innerText = dateForRender;
    UI.CHAT.CONTAINER.prepend(renderDate);
}

function dateFormation(date = new Date()) {
    return new Date(date).toLocaleDateString('nu', DATE_FORMAT.DAY);
}
function timeFormation(time = new Date()) {
    return new Date(time).toLocaleTimeString('nu', DATE_FORMAT.TIME);
}
