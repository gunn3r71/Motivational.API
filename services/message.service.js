import { frases } from './../data/data';

var getDayMessage = (day) => {
    return frases[day-1];
};

const _getDayMessage = getDayMessage;
export { _getDayMessage as getDayMessage };