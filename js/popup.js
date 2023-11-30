let popupBg = document.querySelector(".popup__bg"); // Фон попап окна
let popup = document.querySelector(".popup"); // Само окно
let openPopupButtons = document.querySelectorAll(".open-popup"); // Кнопки для показа окна
let closePopupButton = document.querySelector(".close-popup"); // Кнопка для скрытия окна
let body = document.querySelector("body");

openPopupButtons.forEach((button) => {
  // Перебираю все кнопки
  button.addEventListener("click", (e) => {
    // Для каждой вешаю обработчик событий на клик
    e.preventDefault(); // Предотвращаю дефолтное поведение браузера
    popupBg.classList.add("active"); // Добавляю класс 'active' для фона
    popup.classList.add("active"); // И для самого окна
    body.classList.add("modal-open");
  });
});

closePopupButton.addEventListener("click", () => {
  // Вешаю обработчик на крестик
  popupBg.classList.remove("active"); // Убираю активный класс с фона
  popup.classList.remove("active"); // И с окна
  body.classList.remove("modal-open");
});

document.addEventListener("click", (e) => {
  // Вешаю обработчик на весь документ
  if (e.target === popupBg) {
    // Если цель клика - фон, то:
    popupBg.classList.remove("active"); // Убираю активный класс с фона
    popup.classList.remove("active"); // И с окна
    body.classList.remove("modal-open");
  }
});
