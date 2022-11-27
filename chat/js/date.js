const setLeadingZero = (number) => {
  number = String(number);
  return number.length === 1 ? `0${number}` : number;
};


const isToday = (dateString) => {
  const todayDateString = getTodayDateString();
  return dateString === todayDateString;
};


const getTimeString = (date) => new Date(date).toLocaleTimeString('en-GB');


const getTimeStringWithoutSeconds = (date) => {
  const timeString = getTimeString(date);

  return timeString.slice(0, 5);
};


const getDateString = (date) => {
  date = new Date(date);
  const dateString = `${setLeadingZero(date.getDate())}.${setLeadingZero(date.getMonth() + 1)}`;

  return dateString;
};


const getTodayDateString = () => {
  const date = new Date();

  return getDateString(date);
};


export {
  getTimeString,
  getTimeStringWithoutSeconds,
  getDateString,
  getTodayDateString,
  isToday
};
