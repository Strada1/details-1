const serverUrl = "https://api.genderize.io";

async function Genderize() {

  let firstName = "Pavel";

  try {
    if (firstName) {
      const url = `${serverUrl}?name=${firstName}`;
      let responseUser = await fetch(url);
      let user = await responseUser.json();
      console.log("user: ", user);
          window.alert(
            (user.name ? `${user.name} is ` : "empty name ") +
              (user.gender ? `${user.gender}` : "Unknown gender"))
    } else {
      throw {
        name: "EmptyFirstName",
        message: "Имя пользователя пустое",
      };
    }
  } catch (e) {
    if (e.name === "EmptyFirstName") console.error("Введите имя пользователя!");
  }
}

Genderize();

