import { ELEMENTS } from "./elements.js";

export function closePopups(popup) {
  if (!popup.classList.contains('display_flex')) {
    popup.classList.add('display_flex');
    ELEMENTS.MAIN_BLOCK.style.backgroundColor = '#535353';
  } else {
    popup.classList.remove('display_flex');
    ELEMENTS.MAIN_BLOCK.style.backgroundColor = 'white';
  }
}