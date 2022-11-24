import { ELEMENTS } from './elements.js';

export function closePopupsSettings() {
  if (!ELEMENTS.SETTINGS_WRAPPER.classList.contains('active')) {
    ELEMENTS.SETTINGS_WRAPPER.classList.add('active');
    setTimeout(() => {
      ELEMENTS.POPUP_SETTINGS.style.opacity = 1;
      ELEMENTS.SETTINGS_WRAPPER.style.opacity = 1;
    }, 150);
  } else {
    ELEMENTS.POPUP_SETTINGS.style.opacity = 0;
    ELEMENTS.SETTINGS_WRAPPER.style.opacity = 0;
    setTimeout(() => {
      ELEMENTS.SETTINGS_WRAPPER.classList.remove('active');
    }, 500);
  }
}
