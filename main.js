function getElementByClass(classElement) {
  return document.querySelector(classElement);
}

const codeForm = getElementByClass('.form-code');
const codeInput = getElementByClass('.code');
const codeButton = getElementByClass('.get-code');
console.log(codeForm);

codeForm.addEventListener('submit', changeName)

//Записал полученый токен в куки
document.cookie = "token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImF2ZWxpdjFAbWFpbC5ydSIsImlhdCI6MTY2OTM4NjE3MywiZXhwIjoxNjcyOTgyNTczfQ.8S-3HInauvzAoGcJbDUQqIwswnwkNk_cRzpVK4zbFGU";

//Функция с lernJS  возвращает значение куки по имени
function getCookie(name) {
  let matches = document.cookie.match(new RegExp(
    "(?:^|; )" + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)"
  ));
  return matches ? decodeURIComponent(matches[1]) : undefined;
}

//Пытаюсь поменять имя, выдает Deprecated Feature Used
const url = `https://edu.strada.one/api/user`;
function changeName(e) {
  e.preventDefault();
  fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json;charset=utf-8',
      'Authorization': `Bearer ${ getCookie('token') }`
    },
    body: JSON.stringify({name: "PavelTry124"})
  });
}

console.log(document.cookie);




// Чтобы запрос код на почту используйте этот эндпоинт POST https://edu.strada.one/api/user { email: ‘my@eamil.com’ }

// const url = `https://edu.strada.one/api/user`;
// function getCode(e) {
//   e.preventDefault();
//   fetch(url, {
//     method: 'POST',
//     headers: {
//       'Content-Type': 'application/json;charset=utf-8',
//     },
//     body: JSON.stringify({email: "aveliv1@mail.ru"})
//   });
//   console.log('Проверьте почту');
// }

// Authorization: `Bearer ${token}`