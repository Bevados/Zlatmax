import * as slider from '../slider.js'

let sliderList = document.querySelector('.new__slider');
let sliderItem = document.querySelectorAll('.slider-new__item');

let itemWidth = sliderItem[0].offsetWidth; //ширина слайда
let columnGap = parseInt(window.getComputedStyle(sliderList).getPropertyValue('column-gap'));


//Изначальные позиции
export function startingPositionBlockNew() {
   slider.startingPosition(itemWidth, sliderItem, columnGap);
}

//Функция сдвига блоков влево
export function sliderShiftBlockNew() {
   slider.sliderShift(sliderItem, itemWidth, columnGap);
   sliderItem = document.querySelectorAll('.slider-new__item');
   setTimeout(slider.shiftLeft, 1000, sliderItem, itemWidth, columnGap, sliderList);
}