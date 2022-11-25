import {SERVER} from "./value.js";

export async function sendMail(mail) {
  try {
    const response = await fetch(SERVER.getCode, {
      method: "POST",
      headers: {
        "Content-Type": "application/json;charset=utf-8",
      },
      body: JSON.stringify({ email: mail }),
    });

    const result = await response.json();
    console.log(result);

    if (!response.ok) {
      console.log("Ошибка:" + response.status);
    }
  } catch (error) {
    console.log(error);
  }
}

export async function changeName(nameUser, token) {
  try {
    const response = await fetch(SERVER.getCode, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({ name: nameUser }),
    });

    const result = await response.json();
    if (result.message) {
      console.log(result.message);
    }
    if (!response.ok) {
      console.log("Ошибка:" + response.status);
    }
  } catch (error) {
    console.log(error);
  }
}

export async function requestServer(URL, token) {
  try {
    const response = await fetch(URL, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });

    let result = await response.json();
    if (!response.ok) {
      console.log("Ошибка:" + response.status);
    }
    return result;
  } catch (error) {
    console.log(error);
  }
}
