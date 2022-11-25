import { Fetch } from './fetch';

export async function getHistory() {
  const messages = await new Fetch('https://edu.strada.one/api/messages/', 'GET')
    .then((response) => (response.ok ? response.json() : Promise.reject(response)))
    .then((result) => result.messages)
    .catch(() => {
      alert('Не удалось соединиться с сервером!');
    });

  localStorage.setItem('messages', JSON.stringify(messages));
}
