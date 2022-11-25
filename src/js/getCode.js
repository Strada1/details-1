import {URL_USER } from './const.js';

const authForm = document.querySelector('#form_auth');
const emailInput = document.querySelector('#input_email');
const btnAuth = document.querySelector('#btn_auth');
const EMAIL_REGEXP = /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/iu;

const user = {};

authForm.addEventListener('submit', async (e) => {
  e.preventDefault();
  try {
    user.email = emailInput.value;
    await getCode(URL, user);
  } catch (error) {
    console.log('error', error);
  }

});

emailInput.addEventListener('input', onInput);

async function getCode (url, email) {
  try {
    let response = await fetch(URL_USER,{
      method: 'POST',
      headers: {
        'Content-Type': 'application/json; charset=utf-8',
      },
      body: JSON.stringify(email)
    });
    const result = response.json();
    return result;
  } catch (error) {
    console.log('error getCode', error)
  }

}



function onInput() {
  if (isEmailValid(emailInput.value) && emailInput.value !== '') {
    emailInput.style.borderColor = 'green';
    btnAuth.disabled = false;
  } else {
    emailInput.style.borderColor = 'red';
    btnAuth.disabled = true;
  }
}

function isEmailValid(value) {
  return EMAIL_REGEXP.test(value);
}