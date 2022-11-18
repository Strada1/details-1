export const URLS = {
  AUTHORIZATION: new URL('https://edu.strada.one/api/user'),
};

export const HTTP_METHOD = {
  GET: 'GET',
  POST: 'POST',
};

export async function sendRequest(method, URL, body = null) {
  const headers = { 'Content-type': 'application/json; charset=utf-8' };
  const response = await fetch(URL, {
    method,
    body: JSON.stringify(body),
    headers,
  });
  if (response.ok) {
    return response.json();
  }
}
