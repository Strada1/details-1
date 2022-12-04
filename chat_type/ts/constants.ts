import Cookies from "js-cookie"

export const ELEMENTS = {
  chatScreen: document.getElementById('chat-screen') as HTMLElement,
  midSection: document.getElementById('mid-section') as HTMLElement,
  msgInput: document.getElementById('message-input') as HTMLInputElement,
  msgForm: document.getElementById('message-form') as HTMLFormElement,
  msgTemplate: document.getElementById('message-template') as HTMLTemplateElement,
  msgContainer: document.getElementById('message-container') as HTMLElement,
  endEl: document.querySelector('.end-el') as HTMLElement,
  modalTemplate: document.getElementById('modal') as HTMLTemplateElement,
  settingsButton: document.getElementById('settings-button') as HTMLElement,
  logButton: document.getElementById('log-button') as HTMLElement,
}

export const MODAL_CASES = {
  SETTINGS: {
    purpose: 'settings',
    modalTitle: 'Настройки',
    formTitle: 'Имя в чате:',
    buttonTitle: 'Сохранить'
  },
  AUTH: {
    purpose: 'auth',
    modalTitle: 'Авторизация',
    formTitle: 'Почта:',
    buttonTitle: 'Получить код'
  },
  VERIFY: {
    purpose: 'verify',
    modalTitle: 'Подтверждение',
    formTitle: 'Код:',
    buttonTitle: 'Войти'
  }
}

export const COOKIES = {
  cookiesKey: 'userToken',
  getUserToken () {
    return Cookies.get(this.cookiesKey)
  },
}

export const ENDPOINTS = {
  PATCH_NAME: 'https://edu.strada.one/api/user',
  POST_EMAIL: 'https://edu.strada.one/api/user',
  GET_USER: 'https://edu.strada.one/api/user/me',
  GET_HIST: 'https://edu.strada.one/api/messages',
  SOCKET: 'wss://edu.strada.one/websockets?'
}

export const OPTIONS = {
  METHOD: {
    post: 'POST',
    patch: 'PATCH'
  },
  HEADERS: {
    auth: 'Authorization',
    contentType: 'Content-Type'
  },
  HEADERS_VALUES: {
    bearer: `Bearer ${COOKIES.getUserToken()}`,
    typeJSON: 'application/json;charset=utf-8'
  }
}

export const ALERTS = {
  cantChangeName: 'Невозможно изменить имя - вы не авторизованы!',
  loginSuccess: 'Произведен вход! Имя пользователя:',
  loginFail: 'Ошибка входа',
  tokenRequestSuccess: 'Код отправлен! Проверьте вашу эл. почту',
  tokenRequestFail: 'Ошибка при отправке запроса'
}

export const LOGGED_IN_USER = {
  name: null,
  email: null,
}

export const LOG_BUTTON_TEXT = {
  login: 'Войти',
  logout: 'Выйти',
}
