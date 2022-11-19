const popupBg = document.querySelector('.popup__bg'); // Фон попап окна
const popup = document.querySelector('.popup'); // Само окно
const openPopupButtons = document.querySelectorAll('.open-popup'); // Кнопки для показа окна
const closePopupButton = document.querySelector('.close-popup'); // Кнопка для скрытия окна

export const popupBgAuth = document.querySelector('.popup__bg_auth');
export const popupAuth = document.querySelector('.popup_auth')
export const closePopupButtonAuth = document.querySelector('.close-popup-auth');


openPopupButtons.forEach((button) => { // Перебираем все кнопки
    button.addEventListener('click', (e) => { // Для каждой вешаем обработчик событий на клик
        e.preventDefault(); // Предотвращаем дефолтное поведение браузера
        popupBg.classList.add('active'); // Добавляем класс 'active' для фона
        popup.classList.add('active'); // И для самого окна
    })
});

closePopupButton.addEventListener('click',() => { // Вешаем обработчик на крестик
    popupBg.classList.remove('active'); // Убираем активный класс с фона
    popup.classList.remove('active'); // И с окна
});

document.addEventListener('click', (e) => { // Вешаем обработчик на весь документ
    if(e.target === popupBg) { // Если цель клика - фот, то:
        popupBg.classList.remove('active'); // Убираем активный класс с фона
        popup.classList.remove('active'); // И с окна
    }
});

