import Cookies from 'js-cookie';
import { ELEMENT, URL } from './const.js';
import { showPopup, closePopup } from './UI.js';

class ServerError extends Error {
    constructor(message) {
      super(message);
      this.name = 'ValidationError';
    }
  }

export function saveCode() {
  Cookies.set('authorization', `${ELEMENT.CODE_INPUT.value}`);
}

export async function getHistory() {
    try {
      const response = await fetch(URL.MESSAGE, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json;charset=utf-8',
          'Authorization': `Bearer ${Cookies.get('authorization')}`
        }
      });
  
      if (!response.ok) {
        throw new ServerError('data fetch error');
      }
  
      const result = await response.json();
      return result;
    } catch (err) {
      if (err instanceof ServerError) {
        console.log(err.message);
      } else {
        throw err;
      }
    }
  }

export async function sendEmail(email) {
    try {
      const response = await fetch(URL.ACCEPT, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json;charset=utf-8',
          'Authorization': `Bearer ${Cookies.get('authorization')}`
        },
        body: JSON.stringify({ email })
      });
  
      if (!response.ok) {
        throw new ServerError('request not sent');
      }
      
      closePopup(ELEMENT.POPUP_EMAIL);
      showPopup(ELEMENT.POPUP_CODE);
    } catch (err) {
      if (err instanceof ServerError) {
        console.log(err.message);
      } else {
        throw err;
      }
    }
  }

export async function addName(name) {
    try {
      const response = await fetch(URL.ACCEPT, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json;charset=utf-8',
          'Authorization': `Bearer ${Cookies.get('authorization')}`
        },
        body: JSON.stringify({ name })
      });
  
      if (!response.ok) {
        throw new ServerError('request not sent');
      }
  
      closePopup(ELEMENT.POPUP_NAME);
    } catch (err) {
      if (err instanceof ServerError) {
        console.log(err.message);
      } else {
        throw err;
      }
    }
  }

export async function getUser() {
    try {
      const response = await fetch(URL.ME, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${Cookies.get('authorization')}`
        }
      });
  
      if (!response.ok) {
        throw new ServerError('data fetch error');
      }
  
      const result = await response.json();
      return result;
    } catch (err) {
      if (err instanceof ServerError) {
        console.log(err.message);
      } else {
        throw err;
      }
    }
  }