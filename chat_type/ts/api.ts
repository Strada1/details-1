import { ENDPOINTS, OPTIONS } from "./constants.js";

async function fetchData(endpoint: string, options: RequestInit) {
  try {
    let response = await fetch(endpoint, options)
    if(!response.ok) {
      throw new Error ('Failed to fetch')
    }
    let result = await response.json();
    return result;
  } catch(e) {
    console.log(e.message)
  } 
}

// enables to get User or Message History
async function getData(endpoint: string) {
  const response = await fetchData(endpoint, {
    headers: {
      [OPTIONS.HEADERS.auth]: OPTIONS.HEADERS_VALUES.bearer,
    },
  })
  return response;
}

async function requestNameChange(newName: string) {
  const response = await fetchData(ENDPOINTS.PATCH_NAME, {
    method: OPTIONS.METHOD.patch,
    headers: {
      [OPTIONS.HEADERS.auth]: OPTIONS.HEADERS_VALUES.bearer,
      [OPTIONS.HEADERS.contentType]: OPTIONS.HEADERS_VALUES.typeJSON,
    },
    body: JSON.stringify({name: newName})
  })
  return response;
}

async function requestToken(email: string) {
  const response = await fetchData(ENDPOINTS.POST_EMAIL, {
    method: OPTIONS.METHOD.post,
    headers: {
      [OPTIONS.HEADERS.contentType]: OPTIONS.HEADERS_VALUES.typeJSON,
    },
    body: JSON.stringify({email: email}) 
  })
  return response;
}

function openChatSocket(endpoint: string, token: string) {
  const socket = new WebSocket(`${endpoint}${token}`);
  return socket;
}

function sendSocketMessage(message: string, socket: WebSocket) {
  socket.send(JSON.stringify({ text: message }));
}

export { getData, requestNameChange, requestToken,
         openChatSocket, sendSocketMessage }





