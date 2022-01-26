//Раскрытие и скрытие телефонов в десктопной версии
const call = document.querySelector('.call');
const headerCall = document.querySelector('.header__call');
const callNumbersWrap = document.querySelector('.call__numbers-wrap');
export const callExpand = document.querySelector('.call__expand');

let pressEsc = function(evt) {
   if (evt.keyCode === 27) {
      narrowCallMenu();
   }
};

let clickDocument = function(evt) {
   if (evt.target.classList.value.indexOf('call__') == -1) {
      narrowCallMenu();
   }
};

function expandCallMenu () {
   callNumbersWrap.classList.add('call__numbers-wrap--active');
   document.addEventListener('keydown', pressEsc);
   document.addEventListener('click', clickDocument);
}

function narrowCallMenu () {
   callNumbersWrap.classList.remove('call__numbers-wrap--active');
   document.removeEventListener('keydown', pressEsc);
   document.removeEventListener('click', clickDocument);
}

export function callMenuDesk () {
   if (!callNumbersWrap.classList.contains('call__numbers-wrap--active')) {
      expandCallMenu();
   } else {
      narrowCallMenu();
   }
}



