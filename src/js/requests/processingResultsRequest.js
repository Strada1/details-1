import { request } from './requests';
import { closeAllModal, openModal } from '../UI/modal';
import { callNotification } from '../UI/notification';
import { getSpliceMessages } from '../helps';
import { renderMessage } from '../UI/messages';
import { setLocalStorage } from '../localStorage';
import { LOCAL_STORAGE_NAME, NOTIFICATION_MESSAGE, MODAL } from '../const';

export async function processingResultsAuthorization(email) {
  try {
    await request.sendAuthorization({
      email,
    });
    closeAllModal();
    openModal(MODAL.CONFIRMATION);
  } catch (error) {
    callNotification(error.message);
  }
}

export async function addMessageHistory(token) {
  try {
    const historyMessages = await request.getMessageHistory(token);
    setLocalStorage(
      LOCAL_STORAGE_NAME.HISTORY_MESSAGE,
      historyMessages.messages
    );
    const filerHistory = getSpliceMessages();
    renderMessage(filerHistory, true);
  } catch (error) {
    callNotification(error.message);
  }
}

export async function changeName(name, token) {
  try {
    await request.sendChangeName(token, name);
    closeAllModal();
    callNotification(NOTIFICATION_MESSAGE.NAME_CHANGE);
  } catch (error) {
    callNotification(error.message);
  }
}
