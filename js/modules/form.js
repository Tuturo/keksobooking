import { MIN_PRICES } from './data.js';

const pricesKeys = Object.keys(MIN_PRICES);
const pricesValues = Object.values(MIN_PRICES);

const adForm = document.querySelector('.ad-form');
const types = adForm.querySelector('#type');
const price = adForm.querySelector('#price');

const checkValues = (evt) => {
    
    for (let i = 0; i <= pricesKeys.length - 1; i++) {

        if (types.value === pricesKeys[i]) {
            price.value = pricesValues[i];
            price.min = pricesValues[i];
        };
    };
    
};

types.addEventListener('change', checkValues);