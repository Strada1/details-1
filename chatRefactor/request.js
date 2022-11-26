import { newKey } from "./localstorage.js";
import { checkHistoryMessages,renderLiveMessages,renderLiveNewMessages } from "./index.js";
import { ELEMENTS, POPUP_BUTTONS,POPAPS, URL } from "./const.js";
async function getDataUser() {
    const URL_ME = 'https://edu.strada.one/api/user/me'
    const response = await fetch(URL_ME, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${newKey.get()}`
        }
      });
      const result = await response.json();
      console.log(result)
  }

async function changeName(name) {
    const response = await fetch(URL, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${newKey.get()}`
        },
        body: JSON.stringify({name})
      });
      const result = await response.json();
      console.log(result)
      
}


async function sendEmail(email) {
    const response = await fetch(URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json;charset=utf-8'
      },
      body: JSON.stringify({email})
    });
    const result = await response.json();
    console.log(result)
    
}
const ALL_MESSAGES = []
async function getMessages() {
    const URL_MESSAGES = 'https://edu.strada.one/api/messages/ '
    const response = await fetch(URL_MESSAGES, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${newKey.get()}`
        }
      });
      const result = await response.json();
      ALL_MESSAGES.push(result)
      console.log(ALL_MESSAGES)
      console.log(result)
      checkHistoryMessages(result)
  }

  const socket = new WebSocket(`wss://edu.strada.one/websockets?${newKey.get()}`);


  function sendMessageOnServer() {
    
    socket.send(JSON.stringify({ text: `${ELEMENTS.INPUT_MESSAGE.value}` }));
    ELEMENTS.INPUT_MESSAGE.value = ''
    
    socket.onmessage = function (event) {
      renderLiveNewMessages(JSON.parse(event.data))
    }
  }


  export {getMessages , getDataUser, changeName, sendEmail, sendMessageOnServer, ALL_MESSAGES}