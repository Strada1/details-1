import { ELEMENTS} from "./const";

export function setCookie(value) {
  if (ELEMENTS.code.value !== "") {
    document.cookie = `token=${value}; max-age=1728000`;
    closeModal(ELEMENTS.modalCode);
  } else {
    showWarning(ELEMENTS.codeWarning);
  }
}

export function getCookie(name) {
  let matches = document.cookie.match(
    new RegExp(
      "(?:^|; )" +
        name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, "\\$1") +
        "=([^;]*)"
    )
  );
  return matches ? decodeURIComponent(matches[1]) : undefined;
}

export async function sendRequest(method, URL, body = {}, headers = {}) {
  try {
    let response = await fetch(URL, {
      method: method,
      headers: {
        "Content-Type": "application/json",
        ...headers,
      },
      ...body,
    });

    if (!response.ok) {
      alert("Ошибка запроса:" + response.status);
    }
    let result = await response.json();
    return result;
  } catch (err) {
    console.log(err);
  }
}
