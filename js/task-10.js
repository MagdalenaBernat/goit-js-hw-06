"use strict";

const boxesAdd = document.querySelector('#boxes');
const inputAdd = document.querySelector('#controls>input');
const createBtn = document.querySelector('[data-create]');
const destroyBtn = document.querySelector('[data-destroy]');

const createBoxes = (amount) => {
  const boxesDiv = [];

  for (let i = 0; i < amount; i++) {
    const boxAdd = document.createElement('div');
    boxAdd.style.width = `${30 + 10 * i}px`;
    boxAdd.style.height = `${30 + 10 * i}px`;
    boxAdd.style.backgroundColor=getRandomHexColor();
    
    boxesDiv.push(boxAdd);
  }

  boxesAdd.append(...boxesDiv);
}
const destroyBoxes = () => boxesAdd.innerHTML = '';
createBtn.addEventListener('click', () => createBoxes(inputAdd.value));

destroyBtn.addEventListener('click', destroyBoxes);


function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}



// Napisz skrypt tworzenia i usuwania kolekcji elementów. Użytkownik wprowadza liczbę elementów do input i naciska przycisk Utwórz, co rozpoczyna tworzenie się kolekcji. Po naciśnięciu przycisku Usuń, kolekcja elementów zostaje usunięta.

// <div id="controls">
//   <input type="number" min="1" max="100" step="1" />
//   <button type="button" data-create>Create</button>
//   <button type="button" data-destroy>Destroy</button>
// </div>

// <div id="boxes"></div>

// Utwórz funkcję createBoxes(amount), która bierze jeden parametr - liczbę. Funkcja tworzy tyle <div>, ile ukazano w amount i dodaje je do div#boxes.

// Wymiary pierwszego <div> - 30px na 30px.
// Każdy następny element powinien być szerszy i wyższy od poprzedniego o 10px.
// Wszystkie elementy powinny mieć losowy kolor tła w formacie NEX. Użyj gotowej funkcji getRandomHexColor aby otrzymać kolor.
// function getRandomHexColor() {
//   return `#${Math.floor(Math.random() * 16777215)
//     .toString(16)
//     .padStart(6, 0)}`;
// }

// Utwórz funkcję destroyBoxes(), która usuwa zawartość div#boxes, tym samym usuwając wszystkie utworzone elementy.



// na create dodać controls, żeby sprawdzac przez event.target co zostało wcisnięte
// później do diva na przycisk create wywoływac createBoxes, 
//   a na destroy przy pomocy innerHtml można nadpisać zawartość


// wyższy i szerszy od poprzedniego - bazujemy na Element.style.height=cośtam.width=cośtam