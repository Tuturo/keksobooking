import { activateElements } from "./load.js";

const mapCanvas = document.querySelector('#map-canvas');

const map = L.map(mapCanvas)
    .on('load', () => {
        console.log('Карта инициализирована!');
        activateElements();
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