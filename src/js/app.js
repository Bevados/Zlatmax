//Функция для добавления класса webp или no-webp для html
import * as webpClass from "./modules/webp.js";
webpClass.isWebp();

//Раскрытие телефонов в десктопной и мобильной версии
import * as callMenu from "./modules/call.js";
callMenu.callExpand.addEventListener('click', callMenu.callMenuDesk);
callMenu.callExpandMob.addEventListener('click', callMenu.callMenuMob);


//Бургер меню мобильной версии
import * as burgerMenu from "./modules/burger-menu.js";
burgerMenu.headerNavButton.addEventListener('click', burgerMenu.openBurgerMenu);
// burgerMenu.navButtonClose.addEventListener('click', burgerMenu.closeBurgerMenu);


//Нажатие по кнопкам подсказкам (плюсы)
import {openHintsBlock} from "./modules/header/hint.js";
document.addEventListener('click', function(evt) {
   if (evt.target.closest('.hints-shop__item')) {
      openHintsBlock(evt);
   }
});

//Слайдер блока popular
import * as popular from "./modules/header/popular.js";
popular.startingPosition();
let sliderShiftTimrer = setInterval(popular.sliderShift, 3000);

// import * as popular from "./modules/header/popular.js";
// import {sliderShift} from "./modules/slider.js";
// popular.startingPosition();
// let sliderShiftTimrer = setInterval(function () {sliderShift(popular.sliderList, popular.sliderItem, popular.itemWidth, popular.columnGap)}, 3000);

// Слайдер блока new
import * as blockNew from "./modules/header/new.js";
blockNew.startingPosition();
// let sliderNewTimrer = setInterval(blockNew.sliderShift, 3000);


// Слушатель кнопок footer
import {footerContent, switchClassActive} from "./modules/footer-button.js";
footerContent.addEventListener('click', switchClassActive);


//Подключение динамического адаптива (перенос блоков в html)
import {DynamicAdapt} from "./modules/dynamicAdapt.js";
const da = new DynamicAdapt("max");
da.init();










