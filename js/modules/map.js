import { activateElements } from './load.js';
import { discardExtraDigits } from './util.js';
import { getCard } from './generateCards.js';
import { getData } from './api.js';

const mapCanvas = document.querySelector('#map-canvas');
const adFormAddress = document.querySelector('#address');

const map = L.map(mapCanvas)
    .on('load', () => {
        activateElements();
        adFormAddress.readOnly = true;
        adFormAddress.value = '35.68950, 139.69171';
    })
    .setView({
        lat: 35.68950,
        lng: 139.69171,
}, 10);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', 

    {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    },

).addTo(map);

const mainPinIcon = L.icon({
    iconUrl: '../../leaflet/img/main-pin.svg',
    iconSize: [52, 52],
    iconAnchor: [26, 52],
});

const pinIcon = L.icon({
    iconUrl: '../../leaflet/img/pin.svg',
    iconSize: [40, 40],
    iconAnchor: [20, 40],
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

mainMarker.addTo(map);

mainMarker.on('moveend', (evt) => {
    let coordinates = evt.target.getLatLng();;
    adFormAddress.value = `${discardExtraDigits(coordinates.lat, 5)}, ${discardExtraDigits(coordinates.lng, 5)}`;
});

const createMarkers = (array) => {

    for (let element of array) {

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
    
        marker
            .addTo(map)
            .bindPopup(getCard(offer, author));
    };
};

getData(
    (response) => {
        createMarkers(response);
    },
    (err) => {
        console.log(err);
});