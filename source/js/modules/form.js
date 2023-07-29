import { MIN_PRICES } from './data.js';

const pricesKeys = Object.keys(MIN_PRICES);
const pricesValues = Object.values(MIN_PRICES);

const adForm = document.querySelector('.ad-form');
const types = adForm.querySelector('#type');
const price = adForm.querySelector('#price');

const timeIn = adForm.querySelector('#timein');
const timeOut = adForm.querySelector('#timeout');

const checkValues = () => {
    
    for (let i = 0; i <= pricesKeys.length - 1; i++) {

        if (types.value === pricesKeys[i]) {
            price.min = pricesValues[i];
            price.placeholder = pricesValues[i];
        };
    };
    
};

const setTimeOut = () => {
    timeOut.value = timeIn.value;
};

const setTimeIn = () => {
    timeIn.value = timeOut.value;
};

types.addEventListener('change', checkValues);
timeIn.addEventListener('change', setTimeOut);
timeOut.addEventListener('change', setTimeIn);