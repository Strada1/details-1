/**
 * Чтобы запрос код на почту используйте этот эндпоинт POST https://edu.strada.one/api/user { email: ‘my@eamil.com’ }
 * и из кук прикладывайте в заголовки к каждому запросу Authorization: `Bearer ${token}`
 * А вот и эндпоинт: PATCH https://edu.strada.one/api/user { name: ‘new-name’ }
 * Так же можете попробовать запрос GET https://edu.strada.one/api/user/me чтобы получить данные о своем пользователе
 * Получить историю от сервера GET https://edu.strada.one/api/messages/
 *
 * const socket = new WebSocket(`ws://edu.strada.one/websockets?${token}`);
 * socket.send(JSON.stringify({ text: ‘тестовый тест’ }));
 * socket.onmessage = function(event) { console.log(event.data) };
 */

import user, { USER_STATE } from './User';
import SettingsModal from './Modal/SettingsModal';
import AuthorizationModal from './Modal/AuthorizationModal';
import ConfirmationModal from './Modal/ConfirmationModal';
import log from './Logger';
import Chat from './Chat';
import Network from './Network';

function main() {
  const chat = new Chat(user);
  const settingsModal = new SettingsModal();
  const authorizationModal = new AuthorizationModal();
  const confirmationModal = new ConfirmationModal();

  const UI = {
    settingsBtn: document.querySelector('.toolbar__settings'),
    authBtn: document.querySelector('.toolbar__auth'),
    update: (userObj) => {
      log(userObj.state, '<=');
      switch (userObj.state) {
        case USER_STATE.unauthorized:
          UI.authBtn.textContent = 'Вход';
          UI.settingsBtn.disabled = true;
          break;
        case USER_STATE.unverified:
          UI.authBtn.textContent = 'Верификация';
          UI.settingsBtn.disabled = true;
          break;
        case USER_STATE.authorized:
          UI.authBtn.textContent = 'Выход';
          UI.settingsBtn.disabled = false;
          chat.enableUI();
          break;
        default:
          log('User - unknown status');
      }
    },
  };

  UI.update(user);

  user.onChangeStatus(UI.update);

  authorizationModal.onSubmit((data) => {
    user.requestVerification(data);
    authorizationModal.close();
  });

  confirmationModal.onSubmit((data) => {
    user.authorize(data);
    confirmationModal.close();
  });

  settingsModal.onSubmit(({ name }) => {
    user.setName(name);
    settingsModal.close();
  });

  //   chat.onSubmit((data) => {
  //     log('DATA_TEXT:', data);
  //   });

  UI.authBtn.addEventListener('click', () => {
    switch (user.state) {
      case USER_STATE.unauthorized:
        authorizationModal.open();
        break;
      case USER_STATE.unverified:
        confirmationModal.open();
        break;
      case USER_STATE.authorized:
        user.logout();
        break;
      default:
        log('User state is unknown');
    }
  });

  UI.settingsBtn.addEventListener('click', () => {
    settingsModal.open();
  });
}

document.addEventListener('DOMContentLoaded', main);
