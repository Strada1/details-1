import { initForm } from './message-form.js';
import { initMessageList } from './message-list.js';
import { initAuthorization, initSettings } from './auth.js';
import { getCookie, setCookie, BEARER_COOKIE_NAME } from './cookies.js';

window.addEventListener('DOMContentLoaded', () => {
  initForm();

  const token = getCookie(BEARER_COOKIE_NAME);

  if (token) {
    setCookie(BEARER_COOKIE_NAME, token, {secure: true});
    initMessageList(token)
    initSettings();
  } else {
    initAuthorization();
  }
});
