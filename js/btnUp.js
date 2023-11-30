const btnUp = document.querySelector(".btnUp");

// обработчик на скролл окна
window.addEventListener("scroll", trackScroll);
// обработчик на нажатие
btnUp.addEventListener("click", goTop);

function trackScroll() {
  // вычисляю положение от верхушки страницы
  const scrolled = window.pageYOffset;
  // считаю высоту окна браузера
  const coords = document.documentElement.clientHeight;
  // если вышли за пределы первого окна
  if (scrolled > coords) {
    // кнопка появляется
    btnUp.classList.add("btnUp--show");
  } else {
    // иначе исчезает
    btnUp.classList.remove("btnUp--show");
  }
}

function goTop() {
  // пока не вернулись в начало страницы
  if (window.pageYOffset > 0) {
    // скроллим наверх
    window.scrollBy(0, -60); // второй аргумент - скорость
    setTimeout(goTop, 0); // вхожу в рекурсию
  }
}
