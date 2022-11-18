const ELEMENTS = {
  modalButtonName: document.querySelector(".modal-name"),
  modalName: document.querySelector("#modal-name"),
  modals: document.querySelectorAll("[data-modal"),
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
};

const ELEM_HEIGHTS = {
  windowHeight: document.documentElement.clientHeight,
  headerHeight: document.querySelector(".header").clientHeight,
  messageMargin: 15,
  inputMessageHeight: 50,
  inputMessagePadding: 42.5,
};

const lastMessage = ELEMENTS.contentWindow.querySelector(
  ".message:last-child"
);

const set = new Set();

function showModal(modalItem) {
  modalItem.classList.remove("hidden");
}

function closeModal(modalItem) {
  modalItem.classList.add("hidden");
}

ELEMENTS.buttonsClose.forEach(function (item) {
  item.addEventListener("click", function () {
    const currentModal = this.closest("[data-modal]");
    closeModal(currentModal);
  });
});

ELEMENTS.modals.forEach(function (item) {
  item.addEventListener("click", function () {
    this.classList.add("hidden");
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
if (ELEMENTS.textArea.value.trim() !== '') {
  div.append(tmpl.content.cloneNode(true));
  div.querySelector("p:nth-child(1)").textContent = ELEMENTS.textArea.value;
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

async function getAuthorizationCode(userEmail) {
  try {
    let response = await fetch("https://edu.strada.one/api/user", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email: userEmail }),
    });

    if (!response.ok) {
      alert(response.status);
    }
  } catch (err) {
    console.log(err);
  }
}

ELEMENTS.authorizationForm.addEventListener("submit", (event) => {
  event.preventDefault();
  getAuthorizationCode(ELEMENTS.emailInput.value.trim());
  ELEMENTS.emailInput.value = "";
  closeModal(ELEMENTS.modalAuthorization);
  showModal(ELEMENTS.modalCode);
});
