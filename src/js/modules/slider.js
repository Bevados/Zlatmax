//Функция переноса блока в конец
function shiftLeft () {
   if (parseInt(sliderItem[0].style.left) == -(itemWidth + columnGap)) {
      let item = sliderList.removeChild(sliderItem[0]);
      sliderList.appendChild(item);
      item.style.left = (itemWidth + columnGap) * (sliderItem.length - 1) + 'px';
      sliderItem = document.querySelectorAll('.slider-popular__item');
   }
}

export function sliderShift () {
   for(let i = 0; i < sliderItem.length; i++) {
      sliderItem[i].style.left = parseInt(sliderItem[i].style.left) - (itemWidth + columnGap) + 'px';
   }
   setTimeout(shiftLeft, 1000);
}