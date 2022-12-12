import Cookies from 'js-cookie';
import { POPUPS, openPopup, closePopup } from './popups.js';

const settingPopupOpenBtn = document.querySelector('.messenger__header .btn.setting');

const URL = 'https://edu.strada.one/api/user';
const METHOD = 'PATCH';
const HEADERS = 'application/json;charset=utf-8';

async function setNewUserName(name) {

   const response = await fetch(URL, {
      method: METHOD,
      headers: {
         'Content-Type': HEADERS,
         'Authorization': `${Cookies.get('Authorization')}`
      },
      body: JSON.stringify({ name: `${name}` }),
   })

   if (response.ok) {
      closePopup();
   }

}

settingPopupOpenBtn.addEventListener('click', (event) => {
   openPopup(POPUPS.setting.popup);
});
POPUPS.setting.form.addEventListener('submit', (event) => {
   event.preventDefault();
   setNewUserName(POPUPS.setting.input.value)
})

export { }