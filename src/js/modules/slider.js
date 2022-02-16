//Изначальные позиции
export function startingPosition (itemWidth, sliderItem, columnGap) {
   itemWidth = sliderItem[0].offsetWidth;
   for(let i = 0; i < sliderItem.length; i++) {
      sliderItem[i].style.left = (itemWidth + columnGap) * i + 'px';
   }
}

//Функция переноса блока в конец
export function shiftLeft (sliderItem, itemWidth, columnGap, sliderList) {
   if (parseInt(sliderItem[0].style.left) == -(itemWidth + columnGap)) {
      let item = sliderList.removeChild(sliderItem[0]);
      sliderList.appendChild(item);
      item.style.left = (itemWidth + columnGap) * (sliderItem.length - 1) + 'px';
   }
}

//Функция сдвига блоков влево
export function sliderShift (sliderItem, itemWidth, columnGap, shiftLeft) {
   for(let i = 0; i < sliderItem.length; i++) {
      sliderItem[i].style.left = parseInt(sliderItem[i].style.left) - (itemWidth + columnGap) + 'px';
   }
}