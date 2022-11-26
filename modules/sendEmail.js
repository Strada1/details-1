import { closeAuth, closeVerif, openVerif } from "./popup.js";



const sendEmail = function(event) {
    event.preventDefault();
    const requestURL = 'https://edu.strada.one/api/user';
    const errorMessage = document.querySelector('.popup-auth__textError');
    const popupInputAuth = document.querySelector('.popup__input-auth');
    const email = popupInputAuth.value;
    const regex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    const dateExpires = (new Date(Date.now() + 86400e4)).toUTCString();
    try {
        if (regex.test(email)) {
            fetch(requestURL, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json;charset=utf-8'
                },
                body: JSON.stringify({
                    email: email
                })
            }).then(response => {
                if (response.ok) {
                    //Куки:записываем почту
                    document.cookie = `email = ${email}; expires=${dateExpires}`;
                    closeAuth();
                    openVerif();
                    console.log(response);
                    console.log(response.json());
                }
                else {
                    throw new Error('Не удалось выполнить запрос')
                }
            })
        } 
        if (!regex.test(email)) {
            throw new Error('Некорректный Email')
        }    
    } catch (err) {
        errorMessage.textContent = err.message;
    }
};

export default sendEmail;
