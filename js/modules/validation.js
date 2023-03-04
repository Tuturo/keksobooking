import { MIN_TITLE_LENGTH, MAX_TITLE_LENGTH } from './data.js';

const adForm = document.querySelector('.ad-form');
const adTitle = adForm.querySelector('#title');

const checkTitleValidation = () => {
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

adTitle.addEventListener('input', checkTitleValidation);