import { format } from 'date-fns';

export function convertTime(value) {
    return format(value, 'kk:mm');
}
