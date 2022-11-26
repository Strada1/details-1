import { format } from 'date-fns';
import { request } from './requests';
import { closeAllModal, MODAL, openModal } from '../UI/modal';
import { callNotification, NOTIFICATION_MESSAGE } from '../UI/notification';
import { filterNumberMessages } from '../helps';
import { addMessageUI } from '../UI/messages';

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
    const filerHistory = filterNumberMessages(historyMessages.messages);
    filerHistory.forEach((message) => {
      addMessageUI(
        message.user.name,
        message.text,
        format(new Date(message.createdAt), 'HH:mm'),
        message.user.email
      );
    });
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
