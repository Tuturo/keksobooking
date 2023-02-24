// Получить случайное целое число в диапазоне

const getRandomInt = (min, max) => {

    if (min < 0 || max < 0) {
        return -1;
    };

    if (min > max) {
        [min, max] = [max, min];
    };

    return Math.floor(Math.random() * (max - min + 1) + min);
};

// Случайное число с плавающей точкой

const getRandomIntFloat = (min, max, rounding) => {

    if (min < 0 || max < 0) {
        return -1;
    };

    if (min > max) {
        [min, max] = [max, min];
    };

    let randomNumber = Math.random() * (max - min) + min;

    let roundingValue = 1;
    for (let i = 0; i < rounding; i++) {
        roundingValue *= 10;
    }

    return Math.trunc(randomNumber * roundingValue) / roundingValue;
};

const discardExtraDigits = (number, rounding) => {
    let roundingValue = 1;
    for (let i = 0; i < rounding; i++) {
        roundingValue *= 10;
    }

    return Math.trunc(number * roundingValue) / roundingValue;
};

export {getRandomInt, getRandomIntFloat, discardExtraDigits};