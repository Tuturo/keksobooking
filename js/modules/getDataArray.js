import {getRandomInt, getRandomIntFloat} from './util.js';
import {AUTHORS, TITLES, TYPES, TIMES, FEATURE_LIST, DESCRIPTIONS, PHOTOS} from './data.js';


const getRandomArrayElement = (elements) => {
    return elements[getRandomInt(0, elements.length - 1)];
};

const getUniqArrayElements = (elements) => {
    let result = [];
    let randomValue = getRandomInt(0, elements.length - 1);

    for (let i = 0; i <= randomValue; i++) {
        let k = getRandomInt(i, elements.length - 1);
        result.push(elements[k]);
        [elements[i], elements[k]] = [elements[k], elements[i]];
    };

    return result;
};

const getAuthor = () => {
    return {
        author: {
            avatar: getRandomArrayElement(AUTHORS),
        }
    };
};

const getOffer = () => {
    return {
        offer: {
            title: getRandomArrayElement(TITLES),
            address: '{{location.x}}, {{location.y}}',
            price: getRandomInt(10000, 50000),
            type: getRandomArrayElement(TYPES),
            rooms: getRandomInt(1, 7),
            guests: getRandomInt(2, 14),
            checkin: getRandomArrayElement(TIMES),
            checkout: getRandomArrayElement(TIMES),
            features: getUniqArrayElements(FEATURE_LIST),
            description: getUniqArrayElements(DESCRIPTIONS).join(' '),
            photos: getUniqArrayElements(PHOTOS),
        },
    };
};

const getLocation = () => {
    return {
        location: {
            x: getRandomIntFloat(35.65000, 35.70000, 5),
            y: getRandomIntFloat(139.70000, 139.80000, 5),
        },
    }
};

const NEW_ARRAY = new Array(10).fill(null).map(() => Object.assign({}, getAuthor(), getOffer(), getLocation()));

export {NEW_ARRAY};