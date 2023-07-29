import { MIN_TITLE_LENGTH, MAX_TITLE_LENGTH, MAX_PRICE_VALUE } from './data.js';

const adForm = document.querySelector('.ad-form');
const adTitle = adForm.querySelector('#title');
const adPrice = adForm.querySelector('#price');
const adRooms = adForm.querySelector('#room_number');
const adCapacity = adForm.querySelector('#capacity');

const titleValidation = () => {
    const valueLength = adTitle.value.length;

    if (valueLength < MIN_TITLE_LENGTH) {
        adTitle.setCustomValidity('Ещё ' + (MIN_TITLE_LENGTH - valueLength) + ' симв.');
    } else if (valueLength > MAX_TITLE_LENGTH) {
        adTitle.setCustomValidity('Ещё ' + (valueLength - MAX_TITLE_LENGTH) + ' симв.');
    } else {
        adTitle.setCustomValidity('');
    };

    adTitle.reportValidity();
};

const priceValidation = () => {
    const priceValue = Number(adPrice.value);

    if (adPrice.value.length === 0) {
        adPrice.setCustomValidity('Обязательное поле');
    } else if (!priceValue) {
        adPrice.setCustomValidity('Это числовое поле');
    } else if (priceValue > MAX_PRICE_VALUE) {
        adPrice.setCustomValidity('Один миллион — максимальное значение');
    } else {
        adPrice.setCustomValidity('');
    };

    adPrice.reportValidity();
};

const roomsValidation = (evt) => {

    const roomsList = adRooms.children;
    const capacityList = adCapacity.children;

    let activeOption;

    for (let element of roomsList) {
        if (element.selected == true) {
            activeOption = element.value;
        };
    };

    if (activeOption == 100) {
        for (let element of capacityList) {
            if (element.value != 0) {
                element.setAttribute('disabled', 'disabled');
            } else {
                element.removeAttribute('disabled');
            };
            capacityList[3].selected = true;
        }; 
    } else if (activeOption < 100) {
        for (let element of capacityList) {
            if (element.value > activeOption) {
                element.setAttribute('disabled', 'disabled');
            } else {
                element.removeAttribute('disabled');
            };
            capacityList[3].setAttribute('disabled', 'disabled');
            capacityList[2].selected = true;
        };
    };
};

adTitle.addEventListener('input', titleValidation);
adPrice.addEventListener('input', priceValidation);
adRooms.addEventListener('input', roomsValidation);