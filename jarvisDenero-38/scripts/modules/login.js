const URL = 'https://edu.strada.one/api/user';
const METHOD = 'POST';
const HEADERS = 'application/json;charset=utf-8';

async function getKeyOnUserEmail(email) {

   const response = await fetch(URL, {
      method: METHOD,
      headers: {
         'Content-Type': HEADERS,
      },
      body: JSON.stringify({ email }),
   })

   return response;
}

export { getKeyOnUserEmail }