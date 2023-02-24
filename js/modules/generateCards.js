const cardTemplate = document.querySelector('#card').content;
const popupTemplate = cardTemplate.querySelector('.popup');

const typeTranslate = {
    palace: 'Дворец',
    flat: 'Квартира',
    house: 'Дом',
    bungalow: 'Бунгало',
  };

// Выбор словоформы по значению числа
const checkNumberGuests = (rooms, guests) => {

    const roomsWord = [
        'комната',
        'комнаты',
        'комнат',
    ];

    const guestsWord = [
        'гостя',
        'гостей',
    ];

    let currentRoomWord;
    let currentGuestsWord;

    if (rooms === 1) {
        currentRoomWord = roomsWord[0];
    } else if (rooms > 1 && rooms <= 4) {
        currentRoomWord = roomsWord[1];
    } else {
        currentRoomWord = roomsWord[2];
    };

    if (guests === 1) {
        currentGuestsWord = guestsWord[0];
    } else {
        currentGuestsWord = guestsWord[1];
    }

    return `${rooms} ${currentRoomWord} для ${guests} ${currentGuestsWord}`;
};

const getCard = (offer, author) => {
    let popup = popupTemplate.cloneNode(true);

    popup.querySelector('.popup__title').textContent = offer.title;
    popup.querySelector('.popup__text--address').textContent = offer.address;
    popup.querySelector('.popup__text--price').textContent = `${offer.price} ₽/ночь`;
    popup.querySelector('.popup__type').textContent = typeTranslate[offer.type];
    popup.querySelector('.popup__text--capacity').textContent = checkNumberGuests(offer.rooms, offer.guests);
    popup.querySelector('.popup__text--time').textContent = `Заезд после ${offer.checkin}, выезд до ${offer.checkout}`;


    let popupFeatures = popup.querySelector('.popup__features');
    for (let j = 0; j < offer.features.length; j++) {
        let item = document.createElement('li');
        item.classList.add('popup__feature', `popup__feature--${offer.features[j]}`);
        popupFeatures.append(item);
    };

    popup.querySelector('.popup__description').textContent = offer.description;
    let popupPhotos = popup.querySelector('.popup__photos');

    for (let k = 0; k < offer.photos.length; k++) {
        let photo = document.createElement('img');
        photo.classList.add('popup__photo');
        photo.src = offer.photos[k];
        photo.width = '45';
        photo.height = '40';
        photo.alt = 'Фотография жилья';
        
        popupPhotos.append(photo);
    };

    popup.querySelector('.popup__avatar').src = author.avatar;

    return popup;
};

export { getCard };