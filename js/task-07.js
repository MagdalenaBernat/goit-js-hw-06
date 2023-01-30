"use strict";

const textInput = document.querySelector("#font-size-control");
const output = document.querySelector("#text");

window.addEventListener("load", (event) => {
  textInput.value = "56";
  textInput.dispatchEvent(new Event('input'));
});

textInput.addEventListener("input", (event) => {
  output.style.fontSize = `${event.target.value}px`;
});

// Napisz skrypt, który reaguje na zmianę wartości input#font-size-control (zdarzenie input) 
// i zmienia styl inline span#text aktualizując właściwość font - size.
// W rezultacie, podczas przeciągania paska przesuwania będzie zmieniał się rozmiar tekstu.

// <input id="font-size-control" type="range" min="16" max="96" />
// <br />
// <span id="text">Abracadabra!</span>