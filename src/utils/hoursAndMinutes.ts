import { toIncline } from './toIncline';

export const hoursAndMinutes = (number: number) => {
    const hours = Math.floor((number % (3600 * 24)) / 3600);
    const min = Math.floor((number % 3600) / 60);
    const minutes = ['minute', 'minutes', 'minutes'];
    const clock = ['hour', 'hours', 'hours'];
    if (min < 1) {
        return `${hours} ${toIncline(hours, clock)}`;
    }
    if (hours < 1) {
        return `${min} ${toIncline(min, minutes)}`;
    }

    const res = `${hours} ${toIncline(hours, clock)} ${min} ${toIncline(min, minutes)}`;

    return res;
};
