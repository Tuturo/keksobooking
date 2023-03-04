import { MIN_TITLE_LENGTH, MAX_TITLE_LENGTH, MAX_PRICE_VALUE } from './data.js';

const adForm = document.querySelector('.ad-form');
const adTitle = adForm.querySelector('#title');
const adPrice = adForm.querySelector('#price');

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

adTitle.addEventListener('input', titleValidation);

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

adPrice.addEventListener('input', priceValidation);