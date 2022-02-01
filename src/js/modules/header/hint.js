const hintsButton = document.querySelectorAll('.hints-shop__item');
const hintsBlock = document.querySelectorAll('.hints-shop__block-item');
let open = false;
let index;

function closeHintsBlock () {
   for(let i = 0; i < hintsBlock.length; i++) {
      hintsBlock[i].classList.remove('hints-shop__block-item--active');
   }
}

export function openHintsBlock (evt) {
   for(let i = 0; i < hintsButton.length; i++) {
      if (evt.target == hintsButton[i]) {
         index = i;
         break;
      }
   }

   if (open) {
      if (hintsBlock[index].classList.contains('hints-shop__block-item--active')) {
         hintsBlock[index].classList.remove('hints-shop__block-item--active');
         open = false;
      } else {
         closeHintsBlock();
         hintsBlock[index].classList.add('hints-shop__block-item--active');
      }
   } else {
      hintsBlock[index].classList.add('hints-shop__block-item--active');
      open = true;
   }
}


