import { format, fromUnixTime } from "date-fns";

export function checkInput(text) {
  return text.trim().length !== 0;
}

export function getConvertTime(time) {
  return format(new Date(fromUnixTime(time)), "k:mm");
}

export function getConvertDate(time) {
  return format(new Date(fromUnixTime(time)), "dd LLLL");
}

export function getNowDate() {
  const day = format(new Date(), "dd LLLL");
  const hours = format(new Date(), "kk:mm:ss");
  return [day, hours];
}
