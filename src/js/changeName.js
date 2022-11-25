import { currentUser, URL_ME, URL_USER } from './const.js';

const formSettings = document.querySelector('#form_settings');
const inputSettings = document.querySelector('#input_settings');


formSettings.addEventListener('submit', (e) => {
  e.preventDefault();
  const name = inputSettings.value;
  changeName(name).then(r => console.log(r));
  currentUser.name = name;
  inputSettings.value = '';
})


async function changeName (name) {
  const cookiesArr = document.cookie.split(';');
  const token = cookiesArr.filter((item) => item.includes('token')).join().slice(7);
   const response = await fetch(URL_USER,{
     method: 'PATCH',
     headers: {
       'Content-Type': 'application/json; charset=utf-8',
       'Authorization': `Bearer ${token}`,
     },
     body: JSON.stringify({name: name}),
   }).then(response => response.json())
     .catch(error => console.log(error));
   return response;
};


async function getUser () {
  const cookiesArr = document.cookie.split(';');
  const token = cookiesArr.filter((item) => item.includes('token')).join().slice(7);
  const response = await fetch(URL_ME,{
    method: 'GET',
    headers: {
      'Content-Type': 'application/json; charset=utf-8',
      'Authorization': `Bearer ${token}`,
    },
  }).then(response => response.json())
    .catch(error => console.log(error));
  return response;
};

getUser().then(res => console.log('res', res));