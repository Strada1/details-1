export const URL_USER = 'https://edu.strada.one/api/user';
export const URL_ME = 'https://edu.strada.one/api/user/me';

export const currentUser = {
  name: await getName(),
}

async function getName () {
  const cookiesArr = document.cookie.split(';');
  const token = cookiesArr.filter((item) => item.includes('token')).join().slice(7);
  console.log(token);
  const response = await fetch(URL_ME,{
    method: 'GET',
    headers: {
      'Content-Type': 'application/json; charset=utf-8',
      'Authorization': `Bearer ${token}`,
    }
  }).then(response => response.json())
    .catch(error => console.log(error));
  const results = await response.name;
  return results;
};
