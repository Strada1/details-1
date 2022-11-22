import { format } from 'date-fns';

const TIME_PATTERN = 'HH:mm';
const DATE_PATTERN = 'dd MMMM'

const getTimeFromSeconds = (seconds) => new Date(seconds * 1000).toLocaleTimeString('en-GB');

const getDateFromSeconds = (seconds) => new Date(seconds * 1000);

const getTimeStringWithoutSeconds = (seconds) => format(getDateFromSeconds(seconds), TIME_PATTERN);

const getDateString = (seconds) => format(getDateFromSeconds(seconds), DATE_PATTERN);


export { getTimeFromSeconds, getTimeStringWithoutSeconds, getDateString };
