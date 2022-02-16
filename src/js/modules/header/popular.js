import * as slider from '../slider.js'

let sliderList = document.querySelector('.slider-popular');
let sliderItem = document.querySelectorAll('.slider-popular__item');

let itemWidth = sliderItem[0].offsetWidth; //ширина слайда
let columnGap = parseInt(window.getComputedStyle(sliderList).getPropertyValue('column-gap'));


//Изначальные позиции
export function startingPositionBlockPopular() {
   slider.startingPosition(itemWidth, sliderItem, columnGap);
}

//Функция сдвига блоков влево
export function sliderShiftBlockPopular() {
   slider.sliderShift(sliderItem, itemWidth, columnGap);
   sliderItem = document.querySelectorAll('.slider-popular__item');
   setTimeout(slider.shiftLeft, 1000, sliderItem, itemWidth, columnGap, sliderList);
}