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


//Слайдер блока about-shop
import * as aboutShop from "./modules/header/about-shop-slider.js";
aboutShop.initialSetup();
window.addEventListener('resize', aboutShop.сalculationHeightBlockSlider);
let intervalSliderAboutShop = setInterval(aboutShop.activeSlider, 5000);


//Нажатие по кнопкам подсказкам (плюсы)
import {openHintsBlock} from "./modules/header/hint.js";
document.addEventListener('click', function(evt) {
   if (evt.target.closest('.hints-shop__item')) {
      openHintsBlock(evt);
   }
});


//Слайдер блока popular
import * as popular from "./modules/header/popular.js";
popular.startingPositionBlockPopular();
window.addEventListener('resize', popular.startingPositionBlockPopular);
let sliderShiftTimrer = setInterval(popular.sliderShiftBlockPopular, 3000);


// Слайдер блока new
import * as blockNew from "./modules/header/new.js";
// blockNew.startingPosition();
// window.addEventListener('resize', blockNew.startingPosition);
blockNew.startingPositionBlockNew();
window.addEventListener('resize', blockNew.startingPositionBlockNew);
let sliderNewTimrer = setInterval(blockNew.sliderShiftBlockNew, 3000);


// Слушатель кнопок footer
import {footerContent, switchClassActive} from "./modules/footer-button.js";
footerContent.addEventListener('click', switchClassActive);

//Подключение динамического адаптива (перенос блоков в html)
import {DynamicAdapt} from "./modules/dynamicAdapt.js";
const da = new DynamicAdapt("max");
da.init();







