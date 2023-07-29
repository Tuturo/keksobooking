import { activateElements } from './load.js';
import { discardExtraDigits } from './util.js';
import { getCard } from './generateCards.js';
import { comparePins,checkPin } from './filter.js';

const mapCanvas = document.querySelector('#map-canvas');
const adFormAddress = document.querySelector('#address');

let map;

const createMap = () => {

    return new Promise((resolve) => {

        map = L.map(mapCanvas)
            .on('load', () => {
                adFormAddress.readOnly = true;
                adFormAddress.value = '35.68950, 139.69171';
            })
            .setView({
                lat: 35.68950,
                lng: 139.69171,
        }, 14);

        resolve(map);
    });
};

const renderMap = (createMap) => {

    return new Promise((resolve) => {

        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', 

        {
            attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
        },

        ).addTo(createMap);

        resolve(createMap);
    });
};

const setMainMarker = (renderMap) => {

    return new Promise((resolve) => {

        const mainPinIcon = L.icon({
            iconUrl: '../../leaflet/img/main-pin.svg',
            iconSize: [52, 52],
            iconAnchor: [26, 52],
        });

        const mainMarker = L.marker(
            {
                lat: 35.68950,
                lng: 139.69171,
            },
            {
                draggable: true,
                icon: mainPinIcon,
            },
        );

        mainMarker.addTo(renderMap);

        mainMarker.on('moveend', (evt) => {
            let coordinates = evt.target.getLatLng();;
            adFormAddress.value = `${discardExtraDigits(coordinates.lat, 5)}, ${discardExtraDigits(coordinates.lng, 5)}`;
        });

        resolve(renderMap);
    });
};

const createMarkers = (array) => {

    map.closePopup();

    const filteredArray = array.slice().filter((item) => checkPin(item)).slice(0, 10);

    const pinIcon = L.icon({
        iconUrl: '../../leaflet/img/pin.svg',
        iconSize: [40, 40],
        iconAnchor: [20, 40],
    });

    for (let element of filteredArray) {

        const { location,  offer, author } = element;
    
        const marker = L.marker(
            {
                lat: location.lat,
                lng: location.lng,
            },
            {
                icon: pinIcon,
            },
        );
        
        activateElements();
        marker
            .addTo(map)
            .bindPopup(getCard(offer, author));
    };
};

export { createMap, renderMap, setMainMarker, createMarkers };