function closePopup(popup) {
  popup.classList.remove("active");
}
function openPopup(popup) {
  popup.classList.add("active");
}
function btnClose(btns) {
  btns.forEach(function (item) {
    item.addEventListener("click", function () {
      closePopup(this.parentNode.parentNode);
    });
  });
}

export { closePopup, openPopup, btnClose };
