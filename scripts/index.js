import {getElement, getEvent, renderTime } from "./addEvent.js";

const eventButton = getElement('.event-form');
eventButton.addEventListener('submit', getEvent);
setInterval( () => renderTime(), 1000);

