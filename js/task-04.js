"use strict";

const counterValue = document.getElementById("#counter");


for (let i = 0; i <= 15; i += 1) {
    
  console.log(i);
};

const handleClick = () => {
    
  console.log("Button was clicked");
};

const increaseBtn = document.querySelector('[data-action="increment"]');
console.log(increaseBtn);
increaseBtn.addEventListener("click", handleClick);

const decreaseBtn = document.querySelector('[data-action="decrement"]');
console.log(decreaseBtn);
decreaseBtn.addEventListener("click", handleClick);



// Licznik składa się ze spana i przycisków, które, po ich kliknięciu, powinny zwiększać i zmniejszać jego wartość na jednostkę.

// <div id="counter">
//   <button type="button" data-action="decrement">-1</button>
//   <span id="value">0</span>
//   <button type="button" data-action="increment">+1</button>
// </div>

// Utwórz zmienną counterValue w której będzie przechowywana aktualna wartość licznika i inicjalizuj wartość 0.
// Dodaj click listeners do przycisków, wewnątrz których zwiększaj i zmniejszaj wartość licznika.
// Aktualizuj interfejs nową wartością zmiennej counterValue.