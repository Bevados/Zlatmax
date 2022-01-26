//Раскрытие и скрытие окна телефонов
const callWrap = document.querySelector('.call__wrap');
const callNumbersWrap = document.querySelector('.call__numbers-wrap');
export const callExpand = document.querySelector('.call__expand');
export const callExpandMob = document.querySelector('.call__expand-mob');


//Раскрытие и скрытие телефонов десктопной версии
let pressEsc = function(evt) {
   if (evt.keyCode === 27) {
      narrowCallMenuDesk();
   }
};

let clickDocument = function(evt) {
   if (evt.target.classList.value.indexOf('call__') == -1) {
      narrowCallMenuDesk();
   }
};

function expandCallMenuDesk () {
   callNumbersWrap.classList.add('call__numbers-wrap--active');
   document.addEventListener('keydown', pressEsc);
   document.addEventListener('click', clickDocument);
}

function narrowCallMenuDesk () {
   callNumbersWrap.classList.remove('call__numbers-wrap--active');
   document.removeEventListener('keydown', pressEsc);
   document.removeEventListener('click', clickDocument);
}

export function callMenuDesk () {
   if (!callNumbersWrap.classList.contains('call__numbers-wrap--active')) {
      expandCallMenuDesk();
   } else {
      narrowCallMenuDesk();
   }
}


//Раскрытие и скрытие телефонов мобильной версии

let clickDocumentMob = function(evt) {
   if (evt.target.classList.value.indexOf('call__') == -1) {
      narrowCallMenuMob();
   }
};

function narrowCallMenuMob () {
   callWrap.classList.remove('call__wrap--active');
   document.removeEventListener('click', clickDocumentMob);
}

function expandCallMenuMob () {
   callWrap.classList.toggle('call__wrap--active');
   document.addEventListener('click', clickDocumentMob);
}

export function callMenuMob () {
   if (!callWrap.classList.contains('call__wrap--active')) {
      expandCallMenuMob();
   } else {
      narrowCallMenuMob();
   }
}

