import { TYPES } from "./data.js";

const mapCanvas = document.querySelector('#map-canvas');
const mapFilters = document.querySelector('.map__filters');

const removePins = () => {

    let markerPanel = mapCanvas.querySelector('.leaflet-marker-pane');

    let markersArray = markerPanel.children;

    for (let i = markersArray.length - 1; i >= 0; i--) {

        if (!markersArray[i].classList.contains('leaflet-marker-draggable')) {
            markersArray[i].remove();
        };
    };
};

const getPinRank = (pin) => {

    const housingType = mapFilters.querySelector('#housing-type');
    const housingPrice = mapFilters.querySelector('#housing-price');

    let rank = 0;

    if (pin.offer.type === housingType.value) {
        rank += 5;
    };
    
    if (housingPrice.value === 'low') {
        if (pin.offer.price < 10000) {
            rank += 4;
        };
    } else if (housingPrice.value === 'middle') {
        if (pin.offer.price >= 10000 && pin.offer.price <= 50000) {
            rank += 4;
        };
    } else if (housingPrice.value === 'high') {
        if (pin.offer.price > 50000) {
            rank += 4;
        };
    };

    pin.rank = rank;

    return rank;
};

const comparePins = (pinA, pinB) => {
    const rankA = getPinRank(pinA);
    const rankB = getPinRank(pinB);

    return rankB - rankA;
};

const checkPin = (item) => {
    const housingType = mapFilters.querySelector('#housing-type');
    const housingPrice = mapFilters.querySelector('#housing-price');
    const housingRooms = mapFilters.querySelector('#housing-rooms');
    const housingGuests = mapFilters.querySelector('#housing-guests');
    const housingFeatures = mapFilters.querySelector('#housing-features');
    let checkedFeatures = housingFeatures.querySelectorAll('input:checked');

    if (housingType.value !== 'any' || housingPrice.value !== 'any' || housingRooms.value !== 'any' || housingGuests.value !== 'any' || checkedFeatures.length !== 0) {

        if (housingType.value !== 'any' && item.offer.type !== housingType.value) {
            return false;
        };

        if (housingPrice.value !== 'any') {
            switch (housingPrice.value) {
                case 'low':
                    if (item.offer.price >= 10000) {
                        return false;
                    };
                    break;
                case 'middle':
                    if (item.offer.price < 10000 || item.offer.price > 50000) {
                        return false;
                    };
                    break;
                case 'high':
                    if (item.offer.price <= 50000) {
                        return false;
                    };
                    break;
                default:
                    return true;
            };
        };

        if (housingRooms.value !== 'any' && item.offer.rooms !== housingRooms.value) {
            return false;
        };

        if (housingGuests.value !== 'any' && item.offer.guests !== housingGuests.value) {
            return false;
        };

        if (checkedFeatures.length !== 0 && item.offer.features !== undefined) {
            
            let featureMatch = 0;
            for (let i of checkedFeatures) {
                for (let k of item.offer.features) {
                    if (i.value === k) {
                        featureMatch += 1;
                    };
                };
            };

            if (featureMatch === 0) {
                return false;
            };
        };

        return true;

    } else {
        return true;
    };
 };

const setFilter = (cb) => {
    mapFilters.addEventListener('change', () => {
        removePins();
        cb();
    });
};



// const housingFeatures = mapFilters.querySelector('#housing-features');

// const wifiFilter = housingFeatures.querySelector('#filter-wifi');
// const dishwasherFilter = housingFeatures.querySelector('#filter-dishwasher');

export { setFilter,comparePins,checkPin };