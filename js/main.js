import {getRandomInt, getRandomIntFloat} from './modules/util.js';

const AUTHORS = [
    'img/avatars/user01.png',
    'img/avatars/user02.png',
    'img/avatars/user03.png',
    'img/avatars/user04.png',
    'img/avatars/user05.png',
    'img/avatars/user06.png',
    'img/avatars/user07.png',
    'img/avatars/user08.png',
    'img/avatars/user09.png',
    'img/avatars/user10.png',
];

const TITLES = [
    'Вариант вашей мечты!',
    'От сердца отрываю!',
    'Звоните, а то арендуют!',
    'Только ирландцам!',
    'Можно с животными!',
    'Сдаю комнату',
];

const TYPES = [
    'palace',
    'flat',
    'house',
    'bungalow',
];

const TIMES = [
    '12:00',
    '13:00',
    '14:00',
];

const FEATURE_LIST = [
    'wifi',
    'dishwasher',
    'parking',
    'washer',
    'elevator',
    'conditioner',
];

const DESCRIPTIONS = [
    'Вариант мечты!',
    'Сам жил 10 лет, идеально.',
    'Отрываю от сердца!',
    'Из окна открывается потрясающий вид на другое здание.',
    'Консьерж в доме, который не пустит вас после девяти вечера.',
    'Есть куда поставить машину!',
    'Большая кладовая в подарок.',
    'Бесплатные завтраки всего за 150 рублей.'
];

const PHOTOS = [
    'http://o0.github.io/assets/images/tokyo/hotel1.jpg',
    'http://o0.github.io/assets/images/tokyo/hotel2.jpg',
    'http://o0.github.io/assets/images/tokyo/hotel3.jpg',
];

const getRandomArrayElement = (elements) => {
    return elements[getRandomInt(0, elements.length - 1)];
};

const getSomeRandomArrayElements = (elements) => {
    let array = [];
    let random = getRandomInt(0, elements.length - 1);

    for (let i = 0; (i <= random) && (i<= elements.length - 1); i++) {
        let j = getRandomInt(0, elements.length - i) + i;
        let currentElement = elements[j];
        elements[j] = elements[i];
        elements[i] = currentElement;

        array.push(currentElement);
    };

    return array.join(' ');
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
            price: `${getRandomInt(10000, 50000)} руб./месяц`,
            type: getRandomArrayElement(TYPES),
            rooms: getRandomInt(1, 7),
            guests: getRandomInt(2, 14),
            checkin: getRandomArrayElement(TIMES),
            checkout: getRandomArrayElement(TIMES),
            description: getSomeRandomArrayElements(DESCRIPTIONS),
            photos: getSomeRandomArrayElements(PHOTOS),
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

