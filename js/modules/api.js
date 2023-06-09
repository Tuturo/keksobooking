import { showAlert } from "./util.js";

const checkStatus = (response) => {
    if (response.ok) {
        return response;
    }

    const {statusText, status} = response;
    throw new Error(`${status} — ${statusText}`);
};

const getData = (onSuccess, onError) => {
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

export { getData };