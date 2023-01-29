"use strict";

let counterValue = 0;

const counter = document.querySelector("#counter");
const value = document.querySelector("#value");

const decrementButton = counter.querySelector(`[data-action="decrement"]`);
const intrementButton = counter.querySelector(`[data-action="increment"]`);

decrementButton.addEventListener(`click`, decrement);
intrementButton.addEventListener(`click`, increment);

function decrement() {
    counterValue -= 1;
    value.textContent = counterValue;
};

function increment() {
  counterValue += 1;
  value.textContent = counterValue;
}




// Licznik składa się ze spana i przycisków, które, po ich kliknięciu, powinny zwiększać i zmniejszać jego wartość na jednostkę.

// <div id="counter">
//   <button type="button" data-action="decrement">-1</button>
//   <span id="value">0</span>
//   <button type="button" data-action="increment">+1</button>
// </div>

// Utwórz zmienną counterValue w której będzie przechowywana aktualna wartość licznika i inicjalizuj wartość 0.
// Dodaj click listeners do przycisków, wewnątrz których zwiększaj i zmniejszaj wartość licznika.
// Aktualizuj interfejs nową wartością zmiennej counterValue.