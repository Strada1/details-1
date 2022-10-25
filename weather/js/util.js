const getTimeFromSeconds = (seconds) => new Date(seconds * 1000).toLocaleTimeString('en-GB');

const getTimeStringWithoutSeconds = (seconds) => {
  const timeString = getTimeFromSeconds(seconds);

  return timeString.slice(0, 5);
};

const getDateString = (seconds) => {
  const months = [
    'January',
    'February',
    'Marth',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December'
  ];
  const date = new Date(seconds * 1000);
  const dateString = `${date.getDate()} ${months[date.getMonth()]}`;

  return dateString;
};

export { getTimeFromSeconds, getTimeStringWithoutSeconds, getDateString };
