"use strict";

function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215)
      .toString(16)
      .padStart(6, 0)}`;
}
  
const myBody = document.querySelector("body");

const changeColorBtn = document.querySelector(".change-color");

const changeColorSpan = document.querySelector(".color");
const changeRandomColor = ()=> {
  changeColorSpan.textContent = myBody.style.backgroundColor=getRandomHexColor();
}
changeColorBtn.addEventListener("click", changeRandomColor);



// Napisz skrypt, który zmienia kolor tła elementu <body> poprzez style inline po kliknięciu 
// na button.change - color i wprowadza wartość koloru do span.color.

// <div class="widget">
//   <p>Background color: <span class="color">-</span></p>
//   <button type="button" class="change-color">Change color</button>
// </div>

// Aby wygenerować losowy kolor użyj funkcji getRandomHexColor.

// function getRandomHexColor() {
//   return `#${Math.floor(Math.random() * 16777215)
//     .toString(16)
//     .padStart(6, 0)}`;
// }