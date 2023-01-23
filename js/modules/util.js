// Получить случайное целое число в диапазоне

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);

    if ((min >= 0) && (max => 0)) {
        
        if (min > max) {
            let replace = min;
            min = max;
            max = replace;
        };

    } else {
        return console.log('Только положительные числа!');
    };

    return Math.floor(Math.random() * (max - min + 1) + min);
}

// Случайное число с плавающей точкой

function getRandomIntFloat(min, max, rounding) {

    if ((min >= 0) && (max >= 0) && (rounding >= 0)) {

        if (min > max) {
            let replace = min;
            min = max;
            max = replace;
        };

    } else {
        return console.log('Только положительные значения!');
    };

    let randomNumber = Math.random() * (max - min) + min;

    let roundingValue = 1;
    for (let i = 0; i < rounding; i++) {
        roundingValue *= 10;
    }

    return Math.trunc(randomNumber * roundingValue) / roundingValue;
}
