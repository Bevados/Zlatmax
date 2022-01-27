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


//Подключение динамического адаптива (перенос блоков в html)
import {DynamicAdapt} from "./modules/dynamicAdapt.js";
const da = new DynamicAdapt("max");
da.init();