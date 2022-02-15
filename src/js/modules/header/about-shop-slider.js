const descriptionShopList = document.querySelector('.description-shop__list');
const descriptionShopItem = document.querySelectorAll('.description-shop__item');
const switchDescriptionList = document.querySelector('.switch-description__list');
const switchDescriptionNumber = document.querySelector('.switch-description__number');
const switchDescriptionAmount = document.querySelector('.switch-description__amount');


//Расчёт высоты блока description-shop__list
export function сalculationHeightBlockSlider() {
   let height = 0;
   for (let i = 0; i < descriptionShopItem.length; i++) {
      if(descriptionShopItem[i].offsetHeight > 0) {
         height = descriptionShopItem[i].offsetHeight;
      }
   }

   descriptionShopList.style.height = height + 'px';
}

//Расчёт и отрисовка полосок времени под слайдером
function renderingSwitchDescriptionItem() {
   for (let i = 0; i < descriptionShopItem.length; i++) {
      let li = document.createElement('li');
      li.classList.add('switch-description__item');
      switchDescriptionList.appendChild(li);
   }
}

//Добавить первой полоске класс active
function addClassActiveFirstSwitchDescriptionItem() {
   document.querySelector('.switch-description__item').classList.add('switch-description__item--active');
}


//Расчет и отрисовка номера активного слайдера
function numberSlider() {
   if(index < 9) {
      switchDescriptionNumber.textContent = '0' + (index + 1);
   } else {
      switchDescriptionNumber.textContent = (index + 1);
   }
}

//Расчёт и отрисовка количества слайдов
function calculatingNumberSlides() {
   switchDescriptionAmount.textContent = descriptionShopItem.length;
}

//Фукнция с запуском первоначальных расчётов и отрисовок
export function initialSetup() {
   сalculationHeightBlockSlider();
   renderingSwitchDescriptionItem();
   calculatingNumberSlides();
   addClassActiveFirstSwitchDescriptionItem();
   numberSlider();
}


//------------------------------------------------
//Функция добавления класса

let index = 0;
export function activeSlider() {
   const switchDescriptionItem = document.querySelectorAll('.switch-description__item');
   descriptionShopItem[index].classList.remove('description-shop__item--active');
   switchDescriptionItem[index].classList.remove('switch-description__item--active');
   index = (index + 1) % descriptionShopItem.length;
   descriptionShopItem[index].classList.add('description-shop__item--active');
   switchDescriptionItem[index].classList.add('switch-description__item--active');
   numberSlider();
}

