"use strict";

const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];


const ulIngredients = document.getElementById('ingredients');


ingredients.forEach(function (value) {

const listOfIngredients = document.createElement('li');

listOfIngredients.classList.add('item');
  
listOfIngredients.textContent = (`${value}`);

console.log(listOfIngredients);

ulIngredients.append(listOfIngredients);

});



// Napisz skrypt, który dla każdego elementu tablicy ingredients:

// Utworzy oddzielny element <li>. Koniecznie użyj metody document.createElement().
// Doda nazwę elementu jako jego zawartość tekstową.
// Doda do elementu klasę item.
// Po czym umieści wszystkie <li> na liście podczas jednej operacji ul#ingredients.