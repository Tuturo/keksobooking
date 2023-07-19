import './modules/generateCards.js';
import './modules/form.js';
import './modules/load.js';
import './modules/validation.js';
import './modules/user-form.js';
import { createMap, renderMap, setMainMarker, createMarkers } from './modules/map.js';
import { getData } from './modules/api.js';
import { setFilter } from './modules/filter.js';

createMap()
    .then(renderMap)
    .then(setMainMarker)
    .then(
        getData((response) => {
            createMarkers(response);
            setFilter(() => createMarkers(response));
        })
    );