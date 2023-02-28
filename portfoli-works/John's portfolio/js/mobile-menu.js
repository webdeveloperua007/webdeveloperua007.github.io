let menuBtn = document.querySelector(".menu__burger");
let mobileMenu = document.querySelector(".mobile__menu");
// копируем тег header__list
let menu_list = document.querySelector(".header__list").cloneNode(true);

function turnMenu() {
    menuBtn.classList.toggle("active");
    mobileMenu.classList.toggle("show");
    document.body.classList.toggle("over-off");
    mobileMenu.appendChild(menu_list);
}

// отслеживается нажатие на кнопку бургера и добавляется/удаляется класс
menuBtn.addEventListener("click", function () {
    turnMenu();
});
// отслеживается нажатие на меню и добавляется/удаляется класс
mobileMenu.addEventListener("click", function () {
    turnMenu();
});

function someFunc() {
    // Выполняем действие, если ширина меньше 768px
    var w = window.innerWidth;
    if (w > 500 && menuBtn.classList.contains("active")) {
        turnMenu();
    }
}

// Выполняем заново при изменении размера окна
window.addEventListener("resize", function () {
    someFunc();
});
