import Cookies from 'js-cookie';

const URLmessage = 'https://edu.strada.one/api/messages/';
const HEADERS = 'application/json;charset=utf-8';

async function getAllMessage() {

   let response = await fetch(URLmessage, {
      method: 'GET',
      headers: {
         'Content-Type': HEADERS,
         'Authorization': `${Cookies.get('Authorization')}`,
      }
   })

   return response;

}

export { getAllMessage }