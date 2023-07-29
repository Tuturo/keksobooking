const mapFilters = document.querySelector('.map__filters');
const mapFiltersChildren = mapFilters.children;
const adForm = document.querySelector('.ad-form');
const formFieldsets = adForm.querySelectorAll('fieldset');

const disablesElements = (elements) => {
    for (let element of elements) {
        element.setAttribute('disabled', 'disabled');
    };
};

mapFilters.classList.add('map__filters--disabled');
disablesElements(mapFiltersChildren);
adForm.classList.add('ad-form--disabled');
disablesElements(formFieldsets);

const enablesElements = (elements) => {
    for (let element of elements) {
        element.removeAttribute('disabled');
    };
};

const activateElements = () => {
    mapFilters.classList.remove('map__filters--disabled');
    enablesElements(mapFiltersChildren);
    adForm.classList.remove('ad-form--disabled');
    enablesElements(formFieldsets);
};

export { activateElements };