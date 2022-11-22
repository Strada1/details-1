const ERROR_MESSAGES_LIST = {
  DEFAULT_ERROR_MESSAGE: 'Не удалось передать данные. Попробуйте перезагрузить страницу.',
  CONNECTION_GET_DATA_ERROR: 'Не удалось получить данные. Попробуйте перезагрузить страницу.',
  CONNECTION_POST_DATA_ERROR: 'Не удалось передать данные. Попробуйте перезагрузить страницу.',
  GET_USER_ERROR: 'Не удалось получить данные пользователя. Попробуйте перезагрузить страницу.',
  GET_MESSAGES_ERROR: 'Не удалось получить сообщения. Попробуйте перезагрузить страницу.',
  GET_DATA_ERROR: 'Не удалось получить поле данных.',
  UNKNOWN_ERROR: 'Неизвестная ошибка.'
};

const ALERT_SHOW_TIME = 7000;

const showError = (message) => {
  message = message ?? ERROR_MESSAGES_LIST.DEFAULT_ERROR_MESSAGE;
  const alertContainer = document.createElement('div');

  alertContainer.style.position = 'fixed';
  alertContainer.style.top = '0';
  alertContainer.style.left = '50%';
  alertContainer.style.transform = 'translateX(-50%)';
  alertContainer.style.zIndex = '10000';
  alertContainer.style.minWidth = '500px';
  alertContainer.style.padding = '20px';
  alertContainer.style.fontSize = '20px';
  alertContainer.style.fontWeight = '500';
  alertContainer.style.color = '#e04226';
  alertContainer.style.textAlign = 'center';
  alertContainer.style.backgroundColor = '#ffeae7';
  alertContainer.style.border = '2px solid #ffc8be';
  alertContainer.style.borderTop = 'none';

  alertContainer.textContent = message;

  document.body.append(alertContainer);

  setTimeout(() => {
    alertContainer.remove();
  }, ALERT_SHOW_TIME);
};


export { showError, ERROR_MESSAGES_LIST };
