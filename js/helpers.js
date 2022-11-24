import { STYLES } from './constants';

export function showPopup(element) {
  element.classList.add(STYLES.SHOW_POPUP);
}

export function hidePopup(element) {
  element.classList.remove(STYLES.SHOW_POPUP);
}
