"use strict";
var _a, _b;
Object.defineProperty(exports, "__esModule", { value: true });
exports.showEndHistory = exports.returnTextAreaSie = exports.showWarning = exports.addScrollIcon = exports.changeTextAreaSize = exports.closeModal = exports.showModal = void 0;
const const_1 = require("./const");
function showModal(modalItem) {
    if (modalItem) {
        modalItem.classList.remove(const_1.ELEMENTS.hiddenClass);
    }
}
exports.showModal = showModal;
function closeModal(modalItem) {
    if (modalItem) {
        modalItem.classList.add(const_1.ELEMENTS.hiddenClass);
    }
}
exports.closeModal = closeModal;
const_1.ELEMENTS.buttonsClose.forEach(function (item) {
    item.addEventListener("click", function () {
        const currentModal = this.closest(const_1.ELEMENTS.closestModal);
        closeModal(currentModal);
    });
});
const_1.ELEMENTS.modals.forEach(function (item) {
    item.addEventListener("click", function () {
        this.classList.add(const_1.ELEMENTS.hiddenClass);
    });
});
const_1.ELEMENTS.modalWindow.forEach(function (item) {
    item.addEventListener("click", function (event) {
        event.stopPropagation();
    });
});
(_a = const_1.ELEMENTS.modalButtonName) === null || _a === void 0 ? void 0 : _a.addEventListener("click", () => {
    showModal(const_1.ELEMENTS.modalName);
});
function changeTextAreaSize(event) {
    if (event.target.scrollHeight < 300) {
        if (const_1.ELEM_HEIGHTS.headerHeight && const_1.ELEM_HEIGHTS.inputMessagePadding) {
            if (const_1.ELEMENTS.textArea && const_1.ELEMENTS.contentWindow) {
                const_1.ELEMENTS.textArea.style.height = `${const_1.ELEM_HEIGHTS.inputMessageHeight}px`;
                let scHeight = event.target.scrollHeight;
                const_1.ELEMENTS.textArea.style.height = ` ${scHeight}px`;
                const_1.ELEMENTS.contentWindow.style.height = `${const_1.ELEM_HEIGHTS.windowHeight -
                    (const_1.ELEM_HEIGHTS.headerHeight +
                        const_1.ELEM_HEIGHTS.inputMessagePadding +
                        scHeight)}px`;
            }
        }
    }
}
exports.changeTextAreaSize = changeTextAreaSize;
function addScrollIcon() {
    if (const_1.ELEMENTS.contentWindow && const_1.ELEMENTS.contentWrapper) {
        const lastMessage = const_1.ELEMENTS.contentWindow.querySelector(".message:last-child");
        const scrollBottom = const_1.ELEMENTS.contentWrapper.scrollHeight -
            const_1.ELEMENTS.contentWrapper.clientHeight -
            const_1.ELEMENTS.contentWrapper.scrollTop;
        if (const_1.ELEM_HEIGHTS.messageMargin && lastMessage) {
            if (const_1.ELEMENTS.scrollDown) {
                if (scrollBottom <
                    lastMessage.clientHeight + const_1.ELEM_HEIGHTS.messageMargin) {
                    const_1.ELEMENTS.scrollDown.hidden = true;
                    return scrollBottom;
                }
                else {
                    const_1.ELEMENTS.scrollDown.hidden = false;
                }
            }
        }
    }
}
exports.addScrollIcon = addScrollIcon;
(_b = const_1.ELEMENTS.scrollDown) === null || _b === void 0 ? void 0 : _b.addEventListener("click", () => {
    if (const_1.ELEMENTS.contentWindow) {
        const lastMessage = const_1.ELEMENTS.contentWindow.querySelector(".message:last-child");
        if (lastMessage) {
            lastMessage.scrollIntoView({
                behavior: "smooth",
            });
        }
    }
});
function showWarning(element) {
    if (element) {
        element.classList.remove(const_1.ELEMENTS.hiddenClass);
        setTimeout(() => {
            element.classList.add(const_1.ELEMENTS.hiddenClass);
        }, 3000);
    }
}
exports.showWarning = showWarning;
function returnTextAreaSie() {
    if (const_1.ELEMENTS.textArea) {
        const_1.ELEMENTS.textArea.value = "";
        const_1.ELEMENTS.textArea.style.height = `50px`;
    }
    if (const_1.ELEMENTS.contentWindow) {
        const_1.ELEMENTS.contentWindow.style.height = `${const_1.ELEM_HEIGHTS.windowHeight -
            (const_1.ELEM_HEIGHTS.headerHeight +
                const_1.ELEM_HEIGHTS.inputMessagePadding +
                const_1.ELEM_HEIGHTS.inputMessageHeight)}px`;
    }
}
exports.returnTextAreaSie = returnTextAreaSie;
function showEndHistory() {
    let div = document.createElement("div");
    div.classList.add("messages-warning");
    let p = document.createElement("p");
    p.innerHTML = "Вся история загружена:)";
    div.append(p);
    if (const_1.ELEMENTS.contentWrapper) {
        const_1.ELEMENTS.contentWrapper.prepend(div);
    }
}
exports.showEndHistory = showEndHistory;
