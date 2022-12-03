import { NOTIFICATION_STATUS, NOTIFICATION_UI } from '../const';

function closeNotification() {
  NOTIFICATION_UI.BOX.classList.add(NOTIFICATION_STATUS.CLOSE);
  NOTIFICATION_UI.BOX.classList.remove(NOTIFICATION_STATUS.ACTIVE);
}

function openNotification() {
  NOTIFICATION_UI.BOX.classList.add(NOTIFICATION_STATUS.ACTIVE);
  NOTIFICATION_UI.BOX.classList.remove(NOTIFICATION_STATUS.CLOSE);
  setTimeout(closeNotification, 2000);
}

export function callNotification(text) {
  NOTIFICATION_UI.TEXT.textContent = text;
  openNotification();
}
