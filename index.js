const openSettings = document.querySelector('#settingsBtn');
const settings = document.querySelector('#settings');
const closeSettings = document.querySelector('#closeSettingsBtn');
const inputMessage = document.getElementById('inputMessage');
let bottomForm = document.getElementById('bottomForm');
let sendBt = document.getElementById('sendBt');
const chatScreen = document.querySelector('.chatScreen');

openSettings.addEventListener('click', (event) => {
  event.preventDefault();
  settings.classList.add('active');
});

closeSettings.addEventListener('click', (event) => {
  event.preventDefault();
  settings.classList.remove('active');
});

function OnButtonPress() {
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

bottomForm.onsubmit = OnButtonPress;
sendBtn.onclick = OnButtonPress;



//inputMessage.value
