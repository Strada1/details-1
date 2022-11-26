const openSettings = document.querySelector('#settingsBtn');
const settings = document.querySelector('#settings');
const closeSettings = document.querySelector('#closeSettingsBtn');

const inputMessage = document.getElementById('inputMessage');
const chatScreen = document.querySelector('.chatScreen');
const inputEmail = document.getElementById('inputEmail');
const inputCode = document.getElementById('inputCode');

const openAuth = document.querySelector('#quitBtn');
const autorization = document.querySelector('#autorization');
const closeAuth = document.querySelector('#closeAuthorizationBtn');

const openConfirm = document.querySelector('#getAuthCodeBtn');
const confirmation = document.querySelector('#confirm');
const closeConfirm = document.querySelector('#closeConfirmBtn');

const URL = {
	CHANGE_USER: "https://edu.strada.one/api/user",
	GET_USER: "https://edu.strada.one/api/user/me",
  GET_MESSAGES: "https://edu.strada.one/api/messages/"
};

let profileNameBtn = document.getElementById('profileNameBtn');
let changeUserForm = document.getElementById('changeUserForm'); 

let sendMessageForm = document.getElementById('sendMessageForm');
let sendMessageBtn = document.getElementById('sendMessageBtn');

let authorizationForm = document.getElementById('authorizationForm');
let getAuthCodeBtn = document.getElementById('getAuthCodeBtn');

let confirmationForm = document.getElementById('confirmationForm');
let signInBtn = document.getElementById('signInBtn');

let getHistory = document.getElementById('getHistory');
let getUserName = document.getElementById('getUserName');


//========================================

window.onload = function() {
  openAuth.addEventListener('click', (event) => {
    event.preventDefault();
    autorization.classList.add('active');
  });
  closeAuth.addEventListener('click', (event) => {
    event.preventDefault();
    autorization.classList.remove('active');
  });

  openSettings.addEventListener('click', (event) => {
    event.preventDefault();
    settings.classList.add('active');
  });
  closeSettings.addEventListener('click', (event) => {
    event.preventDefault();
    settings.classList.remove('active');
  });

  openConfirm.addEventListener('click', (event) => {
    event.preventDefault();
    confirmation.classList.add('active');
  });
  closeConfirm.addEventListener('click', (event) => {
    event.preventDefault();
    confirmation.classList.remove('active');
  });
};

//=========================================

function CreateChatMessage() {
    if (inputMessage.value != ""){
        let sentMessageContainer = document.createElement('div');
        sentMessageContainer.append(tmplReceived.content.cloneNode(true));

        let messageContext = sentMessageContainer.getElementsByClassName('receivedMessageText');
        let timeContext = sentMessageContainer.getElementsByClassName('receivedMessageTime');
        let currentTime = new Date();
        
        messageContext[0].textContent = "Я: " + inputMessage.value;
        timeContext[0].textContent = `${currentTime.getHours()}:${(currentTime.getMinutes()<10?'0':'') + currentTime.getMinutes()}`;
        chatScreen.append(sentMessageContainer);
    }
    else {
        return false;
    }
    return false;
}

function SaveCodeToCookie() {
  let tokenValue = inputCode.value;
  document.cookie = `Bearer ${tokenValue}`;
  console.log(document.cookie);

  confirmation.classList.remove('active');
  autorization.classList.remove('active');
}

async function SendEmailCode() {
  try {
    let userEmail = inputEmail.value;
    console.log(userEmail);

    let response = await fetch(URL.CHANGE_USER, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email: userEmail }),
    });
    console.log(response);
    if (!response.ok) {
      alert(response.status);
    }
  } catch (err) {
    console.log(err);
  }
}

async function CreateServerMessages(name, text, time) {
  let sentMessageContainer = document.createElement('div');
  sentMessageContainer.append(tmplReceived.content.cloneNode(true));

  let messageContext = sentMessageContainer.getElementsByClassName('receivedMessageText');
  let timeContext = sentMessageContainer.getElementsByClassName('receivedMessageTime');
  
  let currentTime = new Date(time);
  messageContext[0].textContent = `${name}: ${text}`;
  timeContext[0].textContent = `${currentTime.getHours()}:${(currentTime.getMinutes()<10?'0':'') + currentTime.getMinutes()}`;
  chatScreen.append(sentMessageContainer);
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
  return result;
	} catch (error) {
		alert(error);
	}  
}

async function ShowMessages() {
  let result = GetMessagesHistory();
  console.log(result);
  result
  .then(messages => messages.messages)
  .then(messages => {
    messages.forEach(message => {
      CreateServerMessages(message.user.name, message.text, message.createdAt);
    });
  });

}

async function GetUser() {
	try {
		const response = await fetch(URL.GET_USER, {
			method: "GET",
			headers: {
				"Authorization": document.cookie
			},
		});
    let result = await response.json();
    console.log(result.name);
    getUserName.textContent = result.name;
		return response;
	} catch (error) {
		alert(error);
	}
}

async function ChangeName() {
  try {
    let inputName = document.getElementById('inputName');
    let userName = inputName.value;
    console.log(userName);

    const response = await fetch(URL.CHANGE_USER, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json;charset=utf-8",
        "Authorization": document.cookie
      },
      body: JSON.stringify({ name: userName }),
    });

    settings.classList.remove('active');
    console.log(response);
  }
  catch (error) {
		alert(error);
	}
}

getHistory.onclick = ShowMessages;

getUserName.onclick = GetUser;

changeUserForm.onsubmit = ChangeName;
profileNameBtn.onclick = ChangeName;

authorizationForm.onsubmit = SendEmailCode;
getAuthCodeBtn.onclick = SendEmailCode;

confirmationForm.onsubmit = SaveCodeToCookie;
signInBtn.onclick = SaveCodeToCookie;

sendMessageForm.onsubmit = CreateChatMessage;
sendMessageBtn.onclick = CreateChatMessage;

