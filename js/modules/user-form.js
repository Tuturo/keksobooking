import { sendData } from './api.js';
import { showAlert } from './util.js';

const userForm = document.querySelector('.ad-form');
const body = document.querySelector('body');
const successTemplate = document.querySelector('#success').content.querySelector('.success');
const errorTemplate = document.querySelector('#error').content.querySelector('.error');

const close = (element) => {
    if (element.classList.contains('success')) {
        userForm.reset();
    }
    body.removeChild(element);
    document.removeEventListener('keydown', closeKeydown);
};

const closeKeydown = (element) => (evt) => {
    if (evt.keyCode === 27) {
        close(element);
    };
};


const showTemplate = (template) => {
    let popup = template.cloneNode(true);
    popup.style.zIndex = '1000';

    console.log(popup);

    popup.addEventListener('click', (evt) => {
        evt.preventDefault();
        close(popup);
    });

    document.addEventListener('keydown', closeKeydown(popup));
    
    body.append(popup);
};


const userFormSubmit = (submitResponse) => {
    userForm.addEventListener('submit', (evt) => {
        evt.preventDefault();

        sendData(
            () => submitResponse(successTemplate),
            () => submitResponse(errorTemplate),
            new FormData(evt.target),
        );
    });
};

userFormSubmit(showTemplate);