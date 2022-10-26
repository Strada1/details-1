import { format } from 'date-fns';

export function calcTime(time) {
	return format(new Date(time * 1000), 'HH:MM');
}

export function getConvertDate(time) {
	return format(new Date(time * 1000), 'dd MMMM');
}

export function calcTimeSun(time) {
	return format(new Date(time * 1000), 'HH:MM');
}
