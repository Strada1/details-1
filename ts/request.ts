import { ELEMENTS } from "./const";
import { showWarning } from "./ui";

export function setCookie(name: string, value: string, age = 1728000): void {
  if (value !== "") {
    document.cookie = `${name}=${value}; max-age= ${age}`;
  } else {
    showWarning(ELEMENTS.codeWarning);
  }
}

export function getCookie(name: string) {
  let matches = document.cookie.match(
    new RegExp(
      "(?:^|; )" +
        name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, "\\$1") +
        "=([^;]*)"
    )
  );
  return matches ? decodeURIComponent(matches[1]) : undefined;
}

type request = {
  method: string;
  URL: string;
  body?: object;
  headers?: object;

}

export async function sendRequest(item: request) {
  try {
    let response = await fetch(item.URL, {
      method: item.method,
      headers: {
        "Content-Type": "application/json",
        ...item.headers,
      },
      ...item.body,
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

