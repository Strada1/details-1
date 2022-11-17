const ELEMENTS = {
  modalButton: document.querySelector("[data-modal-button]"),
  modal: document.querySelector(".modal"),
  buttonClose: document.querySelector("[data-modal-close]"),
  modalWindow: document.querySelector(".modal__window"),
  textArea: document.querySelector(".input-message"),
  contentWindow: document.querySelector(".content"),
  contentWrapper: document.querySelector(".content__wrapper"),
  messageForm: document.querySelector(".texting-area__wrapper"),
  scrollDown: document.querySelector(".scroll-down"),
};

const ELEM_HEIGHTS = {
  windowHeight: document.documentElement.clientHeight,
  headerHeight: document.querySelector(".header").clientHeight,
  messageMargin: 15,
  inputMessageHeight: 50,
  inputMessagePadding: 42.5,
};

const lastMessage = ELEMENTS.contentWindow.querySelector(".message:last-child");
const set = new Set();

function showModal() {
  ELEMENTS.modal.classList.remove("hidden");
}

function closeModal() {
  ELEMENTS.modal.classList.add("hidden");
}

ELEMENTS.modalButton.addEventListener("click", showModal);
ELEMENTS.buttonClose.addEventListener("click", closeModal);
ELEMENTS.modal.addEventListener("click", closeModal);
ELEMENTS.modalWindow.addEventListener("click", (event) => {
  event.stopPropagation();
});

function addMessage(event) {
  let div = document.createElement("div");
  div.classList.add(...["message", "message--user-me", "message--sent"]);

  div.append(tmpl.content.cloneNode(true));
  div.querySelector("p:nth-child(1)").textContent = ELEMENTS.textArea.value;
  ELEMENTS.contentWrapper.append(div);
  console.log(div.scrollHeight);
  div.scrollIntoView({
    behavior: "smooth",
  });

  ELEMENTS.textArea.value = "";
  ELEMENTS.textArea.style.height = `${ELEM_HEIGHTS.inputMessageHeight}px`;
  ELEMENTS.contentWindow.style.height = `${
    ELEM_HEIGHTS.windowHeight - (ELEM_HEIGHTS.headerHeight + ELEM_HEIGHTS.inputMessagePadding + ELEM_HEIGHTS.inputMessageHeight)
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
      ELEM_HEIGHTS.windowHeight - (ELEM_HEIGHTS.headerHeight + ELEM_HEIGHTS.inputMessagePadding + scHeight)
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

ELEMENTS.contentWrapper.addEventListener("scroll", () => {
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
});

ELEMENTS.scrollDown.addEventListener("click", () => {
  lastMessage.scrollIntoView({
    behavior: "smooth",
  });
});
