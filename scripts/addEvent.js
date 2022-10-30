import { intervalToDuration } from 'date-fns';

export function getElement(classElement) {
  let elem = document.querySelector(classElement);
  return elem
}
function clearParentElement(element) {
  while (element.firstChild) {
    element.firstChild.remove();
  }
}
function getDurationToEvent(){
  const eventData = getElement('.event-data').value;
  const timeStampEvent = Date.parse(eventData);
  const nowTime = Date.now();
  const DurationToEvent = intervalToDuration({
    start: new Date(nowTime),
    end: new Date(timeStampEvent)
  })
  return DurationToEvent;
}
export function renderTime() {
  const parentDiv = getElement('.duration');
  const eventName = getElement('.event-add').value;
  const timeObj = getDurationToEvent();
  const patternOfMessage = `До события ${eventName} осталось:`
  clearParentElement(parentDiv)
  makeDataElement(`${patternOfMessage} ${timeObj.years} лет`, parentDiv );
  makeDataElement(`${patternOfMessage} ${timeObj.months} мес.`, parentDiv);
  makeDataElement(`${patternOfMessage} ${timeObj.days} дн.`, parentDiv);
  makeDataElement(`${patternOfMessage} ${timeObj.hours} час.`, parentDiv);
  makeDataElement(`${patternOfMessage} ${timeObj.minutes} мин.`, parentDiv);
  makeDataElement(`${patternOfMessage} ${timeObj.seconds} сек.`, parentDiv);
}
export function getEvent(e) {
  e.preventDefault();
  getDurationToEvent();
}

function makeDataElement(text, parentDiv) {
  const tagP = document.createElement('p');
  tagP.textContent = text;
  parentDiv.append(tagP);
}