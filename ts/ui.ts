import { ELEMENTS, ELEM_HEIGHTS } from "./const";

export function showModal(modalItem: Element | null) {
  if (modalItem) {
    modalItem.classList.remove(ELEMENTS.hiddenClass);
  }
}

export function closeModal(modalItem: Element | null) {
  if (modalItem) {
    modalItem.classList.add(ELEMENTS.hiddenClass);
  }
}

ELEMENTS.buttonsClose.forEach(function (item) {
  item.addEventListener("click", function (this: HTMLElement) {
    const currentModal = this.closest(ELEMENTS.closestModal);
    closeModal(currentModal);
  });
});

ELEMENTS.modals.forEach(function (item) {
  item.addEventListener("click", function (this: HTMLElement) {
    this.classList.add(ELEMENTS.hiddenClass);
  });
});

ELEMENTS.modalWindow.forEach(function (item) {
  item.addEventListener("click", function (event) {
    event.stopPropagation();
  });
});

ELEMENTS.modalButtonName?.addEventListener("click", () => {
  showModal(ELEMENTS.modalName);
});

export function changeTextAreaSize(event: Event) {
  if ((event.target as HTMLElement).scrollHeight < 300) {
    if (ELEM_HEIGHTS.headerHeight && ELEM_HEIGHTS.inputMessagePadding) {
      if (ELEMENTS.textArea && ELEMENTS.contentWindow) {
        ELEMENTS.textArea.style.height = `${ELEM_HEIGHTS.inputMessageHeight}px`;
        let scHeight = (event.target as HTMLElement).scrollHeight;

        ELEMENTS.textArea.style.height = ` ${scHeight}px`;
        ELEMENTS.contentWindow.style.height = `${
          ELEM_HEIGHTS.windowHeight -
          (ELEM_HEIGHTS.headerHeight +
            ELEM_HEIGHTS.inputMessagePadding +
            scHeight)
        }px`;
      }
    }
  }
}

export function addScrollIcon() {
  if (ELEMENTS.contentWindow && ELEMENTS.contentWrapper) {
    const lastMessage = ELEMENTS.contentWindow.querySelector(
      ".message:last-child"
    );
    const scrollBottom =
      ELEMENTS.contentWrapper.scrollHeight -
      ELEMENTS.contentWrapper.clientHeight -
      ELEMENTS.contentWrapper.scrollTop;
    if (ELEM_HEIGHTS.messageMargin && lastMessage) {
      if (ELEMENTS.scrollDown) {
        if (
          scrollBottom <
          lastMessage.clientHeight + ELEM_HEIGHTS.messageMargin
        ) {
          ELEMENTS.scrollDown.hidden = true;
          return scrollBottom;
        } else {
          ELEMENTS.scrollDown.hidden = false;
        }
      }
    }
  }
}

ELEMENTS.scrollDown?.addEventListener("click", () => {
  if (ELEMENTS.contentWindow) {
    const lastMessage = ELEMENTS.contentWindow.querySelector(
      ".message:last-child"
    );
    if (lastMessage) {
      lastMessage.scrollIntoView({
        behavior: "smooth",
      });
    }
  }
});

export function showWarning(element: Element | null) {
  if (element) {
    element.classList.remove(ELEMENTS.hiddenClass);
    setTimeout(() => {
      element.classList.add(ELEMENTS.hiddenClass);
    }, 3000);
  }
}

export function returnTextAreaSie() {
  if (ELEMENTS.textArea) {
    ELEMENTS.textArea.value = "";
    ELEMENTS.textArea.style.height = `50px`;
  }

  if (ELEMENTS.contentWindow) {
    ELEMENTS.contentWindow.style.height = `${
      ELEM_HEIGHTS.windowHeight -
      (ELEM_HEIGHTS.headerHeight +
        ELEM_HEIGHTS.inputMessagePadding +
        ELEM_HEIGHTS.inputMessageHeight)
    }px`;
  }
}

export function showEndHistory() {
  let div = document.createElement("div");
  div.classList.add("messages-warning");
  let p = document.createElement("p");
  p.innerHTML = "Вся история загружена:)";
  div.append(p);
  if (ELEMENTS.contentWrapper) {
    ELEMENTS.contentWrapper.prepend(div);
  }
}
