import { getHours, getMinutes } from 'date-fns';

export function getTime(date) {
  const hours = getHours(new Date(date));
  const minutes = getMinutes(new Date(date));
  const time = `${hours}:${minutes}`;
  return time;
}
