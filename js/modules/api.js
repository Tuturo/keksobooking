import { showAlert } from "./util.js";

const checkStatus = (response) => {
    if (response.ok) {
        return response;
    }

    const {statusText, status} = response;
    throw new Error(`${status} — ${statusText}`);
};

const getData = (onSuccess) => {
    fetch('https://23.javascript.pages.academy/keksobooking/data')
       .then(checkStatus)
       .then((response) => response.json())
       .then((json) => {
           onSuccess(json);
       })
       .catch((err) => {
           showAlert('Сервер недоступен. Попробуйте позже!');
           onError(err);
       });
};

const sendData = (onSuccess, onFail, body) => {
    fetch('https://23.javascript.pages.academy/keksobooking', {
        method: 'POST',
        body: body,
    })
    .then((response) => {
        if (response.ok) {
            onSuccess();
            console.log(response);
        } else {
            onFail('Не удалось отправить форму!');
            console.log(response);
        }
    })
    .catch((err) => {
        console.log(err);
    });
};

export { getData, sendData };