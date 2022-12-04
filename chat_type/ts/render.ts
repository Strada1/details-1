import { ELEMENTS, ENDPOINTS, 
         LOGGED_IN_USER } from "./constants.js"
import { getData } from "./api.js"
import format from "date-fns/format"
import parseISO from "date-fns/parseISO"

class MessageRenderer {
  history: [];
  socket?: WebSocket;
  constructor(history: [], socket?: WebSocket) {
    this.history = history;
    this.socket = socket;
  };
  partialRender(initial: number, partSize: number) {
    let i = initial
    const msgHistory = this.history
    return function () {
      const part = msgHistory.slice(i, i + partSize)
      console.log(part);
      const reversedPart = part.reverse();
      if(reversedPart.length === 0) {
        addEndingTitle();
        return;
      }
      ELEMENTS.chatScreen.prepend(...reversedPart)
      i+=partSize
    }
  };
  renderSocketMessage() {
    this.socket.onmessage = function(event) {
      const jsonData = event.data
      const messageData = JSON.parse(jsonData)
      addDataToTemplate(messageData);
      const template = ELEMENTS.msgTemplate
      const newMsg = template.content.cloneNode(true);
      ELEMENTS.chatScreen.append(newMsg)
    }
  };
};

async function returnHistoryElementsArr() {
  const messagesJSON = await getData(ENDPOINTS.GET_HIST);
  const messagesArr = messagesJSON.messages;
  const allHistory = messagesArr.map((message: Message) => {
    addDataToTemplate(message);
    const template = ELEMENTS.msgTemplate
    const newMsg = template.content.cloneNode(true)
    return newMsg;
  })
  return allHistory;
}

function addDataToTemplate(message: Message) {
  const elems = getMessageTemplateElems();
  elems.msgText.textContent = message.text;
  elems.msgFrom.textContent = message.user.name;
  elems.msgTime.textContent = formatMsgTime(message.createdAt);
  if(message.user.email !== LOGGED_IN_USER.email) {
    elems.msgContainer.classList.add('leftify')
  } else {
    elems.msgContainer.classList.remove('leftify')
  }
}

function getMessageTemplateElems() {
  const template = ELEMENTS.msgTemplate
  const elems = {
    msgText: template.content.querySelector('.message-text') as HTMLElement,
    msgFrom: template.content.querySelector('.message-from') as HTMLElement,
    msgTime: template.content.querySelector('.message-time') as HTMLElement,
    msgContainer: template.content.querySelector('.message-container') as HTMLElement
  }
  return elems;
}

function formatMsgTime(time: string) {
  const toFormat = parseISO(time);
  const formatted = format(toFormat, 'HH:mm');
  return formatted;
}

function addEndingTitle() {
  if(!document.getElementById('endTitle')){
    const title = document.createElement('span');
    title.setAttribute('id', 'endTitle');
    title.textContent = 'Конец истории';
    title.classList.add('end-el');
    ELEMENTS.chatScreen.prepend(title);
  }
  return;
}

interface Message {
  text: string,
  user: {
    name: string,
    email: string
  },
  createdAt: string
}

export { MessageRenderer, addEndingTitle, returnHistoryElementsArr }