const ErrorList = {
  CONNECTION_DATA_ERROR: 'Не удалось получить данные. Попробуйте перезагрузить страницу.',
  GET_DATA_ERROR: 'Не удалось получить поле данных.',
  UNKNOWN_ERROR: 'Неизвестная ошибка.'
};

const ALERT_SHOW_TIME = 5000;


class MyError extends Error {
  constructor (message) {
    super (message);
    this.name = this.constructor.name;
  }
};


class ReadError extends MyError {
  constructor (message, cause) {
    super(message);

    this.cause = cause;
  }
};


class GetDataError extends MyError {
  constructor (field) {
    super('Нет поля ' + field);
    this.field = field;
  }
};


class ConnectionError extends MyError {
  constructor (statusCode, connectionIsOk, service) {
    super('Ошибка соединения. Код ' + statusCode);

    this.statusCode = statusCode;
    this.connectionIsOk = connectionIsOk;
    this.service = service;
  }
};


// Вывод ошибки
const showError = (message) => {
  const alertContainer = document.createElement('div');
  alertContainer.style.position = 'fixed';
  alertContainer.style.top = '0';
  alertContainer.style.left = '50%';
  alertContainer.style.transform = 'translateX(-50%)';
  alertContainer.style.zIndex = '1000';
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
}

export { showError, ErrorList, ReadError, ConnectionError, GetDataError };
