export const headerNavButton = document.querySelector('.header__nav-button');
export const navButtonClose = document.querySelector('.nav__button-close');
const nav = document.querySelector('.nav');

//Функция закрытия меню
export function closeBurgerMenu () {
   nav.classList.remove('nav-active');
   document.body.style.overflow = 'auto';
   navButtonClose.removeEventListener('click', closeBurgerMenu);
}

//Функция открытия меню
export function openBurgerMenu () {
   nav.classList.add('nav-active');
   document.body.style.overflow = 'hidden';
   navButtonClose.addEventListener('click', closeBurgerMenu);
}

