import { ELEMENTS } from './elements.js';

export function closePopupsSettings() {
  if (!ELEMENTS.SETTINGS_WRAPPER.classList.contains('display_flex')) {
    ELEMENTS.SETTINGS_WRAPPER.classList.add('display_flex');
    ELEMENTS.MAIN_BLOCK.style.backgroundColor = '#535353';
  } else {
    ELEMENTS.SETTINGS_WRAPPER.classList.remove('display_flex');
    ELEMENTS.MAIN_BLOCK.style.backgroundColor = 'white';
  }
}
