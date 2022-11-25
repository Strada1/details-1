export function getToken() {
  const nameAndToken = document.cookie.split('=');
  if (nameAndToken[0] === 'token') {
    return nameAndToken[1];
  } else {
    return false;
  }
}
