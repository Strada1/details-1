const putCodeInCookie = function() {
    const inputVerif = document.querySelector('.popup__input-verif');
    const dateExpires = (new Date(Date.now() + 86400e4)).toUTCString();
     //Куки:записываем токен
    document.cookie = `token = ${inputVerif.value}; expires=${dateExpires}`;
    console.log('putcode');
};

export default putCodeInCookie;

