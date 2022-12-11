import { SETTINGS, AUTHORIZATION, CONFIRM, CHAT_MESSAGE, URL } from "./const.js";

//========================================

let messageCounter = 0;

window.onload = function() {
  AUTHORIZATION.OPEN.addEventListener('click', (event) => {
    event.preventDefault();
    AUTHORIZATION.POPUP.classList.add('active');
  });
  AUTHORIZATION.CLOSE.addEventListener('click', (event) => {
    event.preventDefault();
    AUTHORIZATION.POPUP.classList.remove('active');
  });

  SETTINGS.OPEN.addEventListener('click', (event) => {
    event.preventDefault();
    SETTINGS.POPUP.classList.add('active');
  });
  SETTINGS.CLOSE.addEventListener('click', (event) => {
    event.preventDefault();
    SETTINGS.POPUP.classList.remove('active');
  });

  AUTHORIZATION.BUTTON.addEventListener('click', (event) => {
    //event.preventDefault();
    CONFIRM.POPUP.classList.add('active');
  });
  CONFIRM.CLOSE.addEventListener('click', (event) => {
    event.preventDefault();
    CONFIRM.POPUP.classList.remove('active');
  });
  
  SETTINGS.FORM.onsubmit = ChangeName;
  SETTINGS.BUTTON.onclick = ChangeName;

  AUTHORIZATION.FORM.onsubmit = SendEmailCode;
  AUTHORIZATION.BUTTON.onclick = SendEmailCode;

  CONFIRM.FORM.onsubmit = SaveCodeToCookie;
  CONFIRM.BUTTON.onclick = SaveCodeToCookie;

  CHAT_MESSAGE.SCREEN.addEventListener('scroll', OnScrollChanged);
  
  UpdateChat();

}
//=========================================

function SaveCodeToCookie() {
  let tokenValue = CONFIRM.INPUT.value;
  document.cookie = `Bearer ${tokenValue}`;

  CONFIRM.POPUP.classList.remove('active');
  AUTHORIZATION.POPUP.classList.remove('active');
}

async function SendEmailCode() {
  try {
    let userEmail = AUTHORIZATION.INPUT.value;
    let response = await fetch(URL.CHANGE_USER, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email: userEmail }),
    });
    if (!response.ok) {
      alert(response.status);
    }
  } catch (err) {
    console.log(err);
  }
}

async function CreateServerMessages(name, email, text, time) {
  let messageContainer = document.createElement('div');
  let currentTime = new Date(time);

  if (email == localStorage.email){
    messageContainer.append(tmplSent.content.cloneNode(true));
    let messageContext = messageContainer.getElementsByClassName('sentMessageText');
    let timeContext = messageContainer.getElementsByClassName('sentMessageTime');  
    messageContext[0].textContent = `${name}: ${text}`;
    timeContext[0].textContent = `${currentTime.getHours()}:${(currentTime.getMinutes()<10?'0':'') + currentTime.getMinutes()}`;
  }
  else {
    messageContainer.append(tmplReceived.content.cloneNode(true));
    let messageContext = messageContainer.getElementsByClassName('receivedMessageText');
    let timeContext = messageContainer.getElementsByClassName('receivedMessageTime');
    messageContext[0].textContent = `${name}: ${text}`;
    timeContext[0].textContent = `${currentTime.getHours()}:${(currentTime.getMinutes()<10?'0':'') + currentTime.getMinutes()}`;
  }
  CHAT_MESSAGE.SCREEN.prepend(messageContainer);
}

async function GetMessagesHistory() {
  try {
		const response = await fetch(URL.GET_MESSAGES, {
			method: "GET",
			headers: {
				"Authorization": document.cookie
			}
		}); 
  let result = await response.json();
  localStorage.messageHistory = JSON.stringify(result);
  //localStorage.setItem('messageHistory', result);
  return result;
	} catch (error) {
		alert(error);
	}  
}

function ShowMessages() {
  //removeAllMessages();
  
  let resultText = localStorage.getItem('messageHistory');
  let result = JSON.parse(resultText);
  result.messages.forEach((item, i) => {
    //let newIndex = result.messages.length-i-1;
    if ((i>=messageCounter)&&(i<messageCounter+20)) {
      CreateServerMessages(item.user.name, item.user.email, item.text, item.createdAt);
    }
    else {
      return;
    }
  });  
}

function OnScrollChanged() {
  if ((CHAT_MESSAGE.SCREEN.scrollTop == 0)&&(localStorage.isRefreshing == 'false')) {
    messageCounter += 20;
    let previousScrollHeight = CHAT_MESSAGE.SCREEN.scrollHeight;
    ShowMessages();
    let newScrollHeight = CHAT_MESSAGE.SCREEN.scrollHeight;
    CHAT_MESSAGE.SCREEN.scrollTo(0, newScrollHeight-previousScrollHeight);
  }
}

function removeAllMessages(){
  let allMessages = document.querySelectorAll('.receivedMessageContainer, .sentMessageContainer');
  for (let i = allMessages.length-1; i>=0; i--) {
    allMessages[i].remove();
  }
}

async function GetUser() {
	try {
		const response = await fetch(URL.GET_USER, {
			method: "GET",
			headers: {
				"Authorization": document.cookie
			}
		});
    let result = await response.json();
		return result;
	} catch (error) {
		alert(error);
	}
}

async function ChangeName() {
  try {
    let inputName = document.getElementById('inputName');
    let userName = inputName.value;
    const response = await fetch(URL.CHANGE_USER, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json;charset=utf-8",
        "Authorization": document.cookie
      },
      body: JSON.stringify({ name: userName }),
    });
    SETTINGS.POPUP.classList.remove('active');
  }
  catch (error) {
		alert(error);
	}
}

async function SendMessage(socket) {
  let myMessageText = CHAT_MESSAGE.INPUT.value;
  if (myMessageText != "") {
    socket.send(JSON.stringify({ text: `${myMessageText}` }));
  }
}

async function RefreshMessages() {
  localStorage.isRefreshing = true;
  removeAllMessages();
  await GetMessagesHistory();
  messageCounter = 0;
  ShowMessages();
  setTimeout(()=>{
    CHAT_MESSAGE.SCREEN.scrollTo(0, CHAT_MESSAGE.SCREEN.scrollHeight);
  }, 1);
  localStorage.isRefreshing = false;
}

function Connect() {
  let token = document.cookie.slice(7);
  try {
      const socket = new WebSocket(`ws://edu.strada.one/websockets?${token}`);
      //load chat messages history from server while opening socket
      socket.onopen = function() {
        messageCounter = 0;
        ShowMessages();
        setTimeout(()=>{
          CHAT_MESSAGE.SCREEN.scrollTo(0, CHAT_MESSAGE.SCREEN.scrollHeight);
        }, 1);
      };

      //create chat message by form onsubmit
      CHAT_MESSAGE.FORM.addEventListener("submit", (event) => {
        event.preventDefault();
        SendMessage(socket);
      });

      //create chat message by button onclick
      CHAT_MESSAGE.BUTTON.addEventListener("click", (event) => {
        event.preventDefault();
        SendMessage(socket);
      });

      socket.onmessage = function(event) { 
        console.log(event.data) 
        RefreshMessages();
      };
  }
  catch (error) {
		alert(error);
	}
} 

async function UpdateChat() {
  localStorage.isRefreshing = 'false';
  if (document.cookie) {
    removeAllMessages();
    let userData = await GetUser(); 
    localStorage.email = userData.email;
    await GetMessagesHistory();
    Connect();
  }  
}