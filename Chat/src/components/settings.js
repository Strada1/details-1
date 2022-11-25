import { Fetch } from '../modules/fetch';

const settings = document.querySelector('#settings');
const openSettings = document.querySelector('#open_settings');
const closeSettings = document.querySelector('#close_settings');

const sentName = document.querySelector('#sent_name');

openSettings.addEventListener('click', () => {
  settings.classList.add('active');
});

closeSettings.addEventListener('click', () => {
  settings.classList.remove('active');
});

sentName.addEventListener('submit', (event) => {
  event.preventDefault();
  const newName = sentName.children[0].value;
  new Fetch('https://edu.strada.one/api/user', 'PATCH', {
    name: newName,
  })
    .then((response) => (response.ok ? alert('Имя успешно изменено!') : Promise.reject(response)))
    .catch(() => {
      alert('Не удалось изменить имя!');
    });
});
