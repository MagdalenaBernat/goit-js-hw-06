"use strict";

const textInput = document.getElementById("name-input");

const textOutput = document.getElementById("name-output");

textInput.addEventListener("input", (event) => {
textOutput.textContent = event.currentTarget.value;
});


// Napisz skrypt, który przy wpisywaniu tekstu w polu input input#name-input (zdarzenie input) wstawia jego aktualną wartość do span#name-output. Jeśli pole input jest puste, w spanie powinien wyświetlić się komunikat "Anonymous".

// <input type="text" id="name-input" placeholder="Please enter your name" />
//     <h1>Hello, <span id="name-output">Anonymous</span>!</h1>


