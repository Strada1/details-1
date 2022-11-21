const openSettings = document.querySelector('#settingsBtn');
const settings = document.querySelector('#settings');
const closeSettings = document.querySelector('#closeSettingsBtn');
const inputMessage = document.getElementById('inputMessage');
const chatScreen = document.querySelector('.chatScreen');
const inputEmail = document.getElementById('inputEmail');


const openAuth = document.querySelector('#quitBtn');
const autorization = document.querySelector('#autorization');
const closeAuth = document.querySelector('#closeAuthorizationBtn');

const openConfirm = document.querySelector('#getAuthCodeBtn');
const confirmation = document.querySelector('#confirm');
const closeConfirm = document.querySelector('#closeConfirmBtn');

let bottomForm = document.getElementById('bottomForm');
let sendBtn = document.getElementById('sendBtn');

let authorizationForm = document.getElementById('authorizationForm');
let getAuthCodeBtn = document.getElementById('getAuthCodeBtn');

//========================================

openAuth.addEventListener('click', (event) => {
  event.preventDefault();
  autorization.classList.add('active');
});
closeAuth.addEventListener('click', (event) => {
  event.preventDefault();
  autorization.classList.remove('active');
});


closeConfirm.addEventListener('click', (event) => {
  event.preventDefault();
  confirmation.classList.remove('active');
});

openSettings.addEventListener('click', (event) => {
  event.preventDefault();
  settings.classList.add('active');
});
closeSettings.addEventListener('click', (event) => {
  event.preventDefault();
  settings.classList.remove('active');
});


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


async function SendEmailCode(){
  try {
    let userEmail = inputEmail.value;
    console.log(userEmail);
    const serverUrl =  'https://edu.strada.one/api/user'; 

    let response = await fetch(serverUrl, {
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
 


bottomForm.onsubmit = CreateChatMessage;
sendBtn.onclick = CreateChatMessage;

authorizationForm.onsubmit = SendEmailCode;
getAuthCodeBtn.onclick = SendEmailCode;
