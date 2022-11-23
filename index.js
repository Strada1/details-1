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
	GET_USER: "https://edu.strada.one/api/user/me"
};

let profileNameBtn = document.getElementById('profileNameBtn');
let changeUserForm = document.getElementById('changeUserForm'); 

let sendMessageForm = document.getElementById('sendMessageForm');
let sendMessageBtn = document.getElementById('sendMessageBtn');

let authorizationForm = document.getElementById('authorizationForm');
let getAuthCodeBtn = document.getElementById('getAuthCodeBtn');

let confirmationForm = document.getElementById('confirmationForm');
let signInBtn = document.getElementById('signInBtn');

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
        sentMessageContainer.append(tmpl.content.cloneNode(true));

        let messageContext = sentMessageContainer.getElementsByClassName('sentMessageText');
        let timeContext = sentMessageContainer.getElementsByClassName('sentMessageTime');
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

async function SendEmailCode(){
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

async function GetUser() {
	try {
		const response = await fetch(URL.GET_USER, {
			method: "GET",
			headers: {
				"Authorization": document.cookie
			},
      
		});
    console.log(response);
    let answer = JSON.parse(response);
    console.log(answer);

    getUserName.textContent = "Маша";
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

getUserName.onclick = GetUser;

changeUserForm.onsubmit = ChangeName;
profileNameBtn.onclick = ChangeName;

authorizationForm.onsubmit = SendEmailCode;
getAuthCodeBtn.onclick = SendEmailCode;

confirmationForm.onsubmit = SaveCodeToCookie;
signInBtn.onclick = SaveCodeToCookie;

sendMessageForm.onsubmit = CreateChatMessage;
sendMessageBtn.onclick = CreateChatMessage;

