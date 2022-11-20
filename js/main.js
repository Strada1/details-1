const ELEMENTS = {
  modalButtonName: document.querySelector(".modal-name"),
  modalName: document.querySelector("#modal-name"),
  modals: document.querySelectorAll("[data-modal]"),
  buttonsClose: document.querySelectorAll("[data-modal-close]"),
  modalWindow: document.querySelectorAll(".modal__window"),
  textArea: document.querySelector(".input-message"),
  contentWindow: document.querySelector(".content"),
  contentWrapper: document.querySelector(".content__wrapper"),
  messageForm: document.querySelector(".texting-area__wrapper"),
  scrollDown: document.querySelector(".scroll-down"),
  modalAuthorization: document.querySelector("#modal-authorization"),
  modalCode: document.querySelector("#modal-code"),
  getCodeButton: document.querySelector("#modal-authorization  .button"),
  authorizationForm: document.querySelector("#modal-authorization .input-data"),
  emailInput: document.querySelector("#modal-authorization .modal__input"),
  codeForm: document.querySelector("#modal-code .input-data"),
  code: document.querySelector("#modal-code .modal__input"), 
  nameForm: document.querySelector("#modal-name .input-data"),
  name: document.querySelector('#modal-name .modal__input'),
  URL: 'https://edu.strada.one/api/user',
  URL_USER: 'https://edu.strada.one/api/user/me',
  hiddenClass: 'hidden',
  closestModal: '[data-modal]',
  codeWarning: document.querySelector('#modal-code .modal__warning'),
  nameWarning: document.querySelector('#modal-name .modal__warning'),

};

const ELEM_HEIGHTS = {
  windowHeight: document.documentElement.clientHeight,
  headerHeight: document.querySelector(".header").clientHeight,
  messageMargin: 15,
  inputMessageHeight: 50,
  inputMessagePadding: 42.5,
};

const METHOD = {
  POST: 'POST',
  PATCH: 'PATCH',
  GET: 'GET',
}

const lastMessage = ELEMENTS.contentWindow.querySelector(".message:last-child");

const set = new Set();

function showModal(modalItem) {
  modalItem.classList.remove(ELEMENTS.hiddenClass);
}

function closeModal(modalItem) {
  modalItem.classList.add(ELEMENTS.hiddenClass);
}

ELEMENTS.buttonsClose.forEach(function (item) {
  item.addEventListener("click", function () {
    const currentModal = this.closest(ELEMENTS.closestModal);
    closeModal(currentModal);
  });
});

ELEMENTS.modals.forEach(function (item) {
  item.addEventListener("click", function () {
    this.classList.add(ELEMENTS.hiddenClass);
  });
});

ELEMENTS.modalWindow.forEach(function (item) {
  item.addEventListener("click", function (event) {
    event.stopPropagation();
  });
});

ELEMENTS.modalButtonName.addEventListener("click", () => {
  showModal(ELEMENTS.modalName);
});

function addMessage(event) {
  let div = document.createElement("div");
  div.classList.add(...["message", "message--user-me", "message--sent"]);
  if (ELEMENTS.textArea.value.trim() !== "") {
    div.append(tmpl.content.cloneNode(true));
    div.querySelector(".message__text").textContent = ELEMENTS.textArea.value;
    ELEMENTS.contentWrapper.append(div);
    console.log(div.scrollHeight);
  }

  div.scrollIntoView({
    behavior: "smooth",
  });

  ELEMENTS.textArea.value = "";
  ELEMENTS.textArea.style.height = `${ELEM_HEIGHTS.inputMessageHeight}px`;
  ELEMENTS.contentWindow.style.height = `${
    ELEM_HEIGHTS.windowHeight -
    (ELEM_HEIGHTS.headerHeight +
      ELEM_HEIGHTS.inputMessagePadding +
      ELEM_HEIGHTS.inputMessageHeight)
  }px`;
  event.preventDefault();
}

ELEMENTS.messageForm.addEventListener("submit", addMessage);

function changeTextAreaSize(event) {
  if (event.target.scrollHeight < 300) {
    ELEMENTS.textArea.style.height = `${ELEM_HEIGHTS.inputMessageHeight}px`;
    let scHeight = event.target.scrollHeight;

    ELEMENTS.textArea.style.height = ` ${scHeight}px`;
    ELEMENTS.contentWindow.style.height = `${
      ELEM_HEIGHTS.windowHeight -
      (ELEM_HEIGHTS.headerHeight + ELEM_HEIGHTS.inputMessagePadding + scHeight)
    }px`;
  }
}

ELEMENTS.textArea.addEventListener("keydown", (event) => {
  set.add(event.key);

  if (set.has("Enter") && !set.has("Shift")) {
    addMessage(event);
  }
});

ELEMENTS.textArea.addEventListener("keyup", (event) => {
  set.clear();
  changeTextAreaSize(event);
});

function addScrollIcon() {
  const scrollBottom =
    ELEMENTS.contentWrapper.scrollHeight -
    ELEMENTS.contentWrapper.clientHeight -
    ELEMENTS.contentWrapper.scrollTop;

  if (scrollBottom < lastMessage.clientHeight + ELEM_HEIGHTS.messageMargin) {
    ELEMENTS.scrollDown.hidden = true;
    return scrollBottom;
  } else {
    ELEMENTS.scrollDown.hidden = false;
  }
}

ELEMENTS.contentWrapper.addEventListener("scroll", addScrollIcon);

ELEMENTS.scrollDown.addEventListener("click", () => {
  lastMessage.scrollIntoView({
    behavior: "smooth",
  });
});


async function sendRequest(method, URL, body= {}, headers = {}) {
  try {
    let response = await fetch(URL, {
      method: method,
      headers: {
        "Content-Type": "application/json",
        ...headers,
      },
      ...body,
    });

    let result = await response.json();
    console.log(result);

    if (!response.ok) {
      alert('Ошибка запроса:' + response.status);
    }
  } catch (err) {
    console.log(err);
  }
}

ELEMENTS.authorizationForm.addEventListener("submit", (event) => {
  event.preventDefault();
  sendRequest(METHOD.POST, ELEMENTS.URL, {body: JSON.stringify({ email: ELEMENTS.emailInput.value.trim() })});
  ELEMENTS.emailInput.value = "";
  closeModal(ELEMENTS.modalAuthorization);
  showModal(ELEMENTS.modalCode);
});

// PATCH

function showWarning(element) {
  element.classList.remove(ELEMENTS.hiddenClass);
  setTimeout(() => {
   element.classList.add(ELEMENTS.hiddenClass);
  }, 3000);
}

function setCookie(value) {
if (ELEMENTS.code.value !== ''){
  document.cookie = `token=${value}; max-age=1728000`;
  closeModal(ELEMENTS.modalCode);
} else {
  showWarning(ELEMENTS.codeWarning);
}
}

  ELEMENTS.codeForm.addEventListener("submit", (event) => {
    event.preventDefault();
    setCookie(ELEMENTS.code.value);
    ELEMENTS.code.value = '';
  });

function getCookie(name) {
  let matches = document.cookie.match(
    new RegExp(
      "(?:^|; )" +
        name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, "\\$1") +
        "=([^;]*)"
    )
  );
  return matches ? decodeURIComponent(matches[1]) : undefined;
}


ELEMENTS.nameForm.addEventListener("submit", (event) => {
    event.preventDefault();
    const token = getCookie("token");
    if(ELEMENTS.name.value !== '') {
      sendRequest(METHOD.PATCH, ELEMENTS.URL, {body: JSON.stringify({ name: ELEMENTS.name.value.trim() })}, {"Authorization": `Bearer ${token}`});
    sendRequest(METHOD.GET, ELEMENTS.URL_USER, {}, {"Authorization": `Bearer ${token}`});
    } else {
      showWarning(ELEMENTS.nameWarning);
    }
   ELEMENTS.name.value = '';

  });
