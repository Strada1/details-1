import { CHAT } from "./const.js";

export function closePopups(popup) {
  if (!popup.classList.contains("display_flex")) {
    popup.classList.add("display_flex");
    CHAT.MAIN_BLOCK.style.backgroundColor = "#535353";
  } else {
    popup.classList.remove("display_flex");
    CHAT.MAIN_BLOCK.style.backgroundColor = "white";
  }
}
