export const footerContent = document.querySelector('.footer-content');

function addClassActive (elem) {
   elem.classList.add('active-block');
}

function removeClassActive (elem) {
   elem.classList.remove('active-block');
}

export function switchClassActive(evt) {
   if (evt.target.closest('.footer-button')) {
      evt.target.closest('.footer-button').parentElement.classList.toggle('active-block');
   }
}