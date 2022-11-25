import { ELEMENTS, ELEM_HEIGHTS } from "./const.js";


export function showModal(modalItem) {
  modalItem.classList.remove(ELEMENTS.hiddenClass);
}

export function closeModal(modalItem) {
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

export function changeTextAreaSize(event) {
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

function addScrollIcon() {
  const lastMessage = ELEMENTS.contentWindow.querySelector(".message:last-child");
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
  const lastMessage = ELEMENTS.contentWindow.querySelector(".message:last-child");
  lastMessage.scrollIntoView({
    behavior: "smooth",
  });
});

export function showWarning(element) {
  element.classList.remove(ELEMENTS.hiddenClass);
  setTimeout(() => {
    element.classList.add(ELEMENTS.hiddenClass);
  }, 3000);
}

export function returnTextAreaSie() {
  ELEMENTS.textArea.value = "";
  ELEMENTS.textArea.style.height = `50px`;
  ELEMENTS.contentWindow.style.height = `${
    ELEM_HEIGHTS.windowHeight -
    (ELEM_HEIGHTS.headerHeight +
      ELEM_HEIGHTS.inputMessagePadding +
      ELEM_HEIGHTS.inputMessageHeight)
  }px`;
}

export function showEndHistory() {
  let div = document.createElement("div");
  div.classList.add("messages-warning");
  let p = document.createElement("p");
  p.innerHTML = "Вся история загружена:)";
  div.append(p);
  ELEMENTS.contentWrapper.prepend(div);
}
