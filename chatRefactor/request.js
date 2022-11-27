import { newKey } from "./storage.js";
import { loadHistoryMessage,renderMessages } from "./index.js";
import { ELEMENTS, URL, ALL_MESSAGES } from "./const.js";

async function getDataUser() {
    const response = await fetch(URL.URL_USER_DATA, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${newKey.get()}`
        }
      });
      const result = await response.json();
      console.log(`User Details:\nName: ${result.name}\nEmail: ${result.email}`)
  }
async function changeName(name) {
    const response = await fetch(URL.URL_USER, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${newKey.get()}`
        },
        body: JSON.stringify({name})
      });
}

async function sendEmail(email) {
    const response = await fetch(URL.URL_USER, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json;charset=utf-8'
      },
      body: JSON.stringify({email})
    });
}

async function getMessages() {
    const response = await fetch(URL.URL_MESSAGES, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${newKey.get()}`
        }
      });
      const result = await response.json();
      ALL_MESSAGES.push(result)
      loadHistoryMessage(result)
  }

  const socket = new WebSocket(`wss://edu.strada.one/websockets?${newKey.get()}`);
  socket.onmessage = function (event) {
    renderMessages(JSON.parse(event.data))
  }

  function sendMessageOnServer() {
    socket.send(JSON.stringify({ text: `${ELEMENTS.INPUT_MESSAGE.value}` }));
    ELEMENTS.INPUT_MESSAGE.value = ''
  }

  export {getMessages , getDataUser, changeName, sendEmail, sendMessageOnServer, ALL_MESSAGES}