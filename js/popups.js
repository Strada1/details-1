import { POPUPS } from './elements';

POPUPS.SETTINGS_CLOSE_BTN.addEventListener('click', (event) =>
  settingsCloseHandler(event)
);
POPUPS.AUTHORIZATION_SEND.addEventListener('submit', (event) =>
  authorizationSendHandler(event)
);

POPUPS.CONFIRM_CLOSE_BTN.addEventListener('click', (event) =>
  confirmCloseHandler(event)
);

POPUPS.AUTHORIZATION_CLOSE_BTN.addEventListener('click', (event) =>
  authCloseHandler(event)
);

export function openSettingsHandler() {
  POPUPS.SETTINGS_POPUP.style.display = 'block';
}

function settingsCloseHandler(event) {
  event.preventDefault();
  POPUPS.SETTINGS_POPUP.style.display = 'none';
}

function confirmCloseHandler(event) {
  event.preventDefault();
  POPUPS.CONFIRM_BLOCK.style.display = 'none';
}

function authCloseHandler(event) {
  event.preventDefault();
  POPUPS.AUTHORIZATION_BLOCK.style.display = 'none';
}

async function authorizationSendHandler(event) {
  event.preventDefault();
  let userEmail = POPUPS.AUTHORIZATION_FIELD.value.trim();
  console.log(userEmail);

  let response = await fetch('https://edu.strada.one/api/user', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json;charset=utf-8',
    },
    body: JSON.stringify({ email: `${userEmail}` }),
  });

  let result = await response.json();
  console.log(`RESULT: ${result}`);
  console.log(`RESPONSE ${response.ok}`);
  if (response.ok) {
    POPUPS.SETTINGS_POPUP.style.display = 'none';
    POPUPS.CONFIRM_BLOCK.style.display = 'block';
  }
}
