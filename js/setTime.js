import { format } from "date-fns";

export function cityTime(dayTime, currentTimeZone) {
  let localDate =
    dayTime * 1000 +
    new Date(dayTime * 1000).getTimezoneOffset() * 60000 +
    currentTimeZone * 1000;
    const localTime = format(new Date(localDate), "HH:mm");
  return localTime;
}
