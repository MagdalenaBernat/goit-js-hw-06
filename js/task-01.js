"use strict";

const categories = document.getElementsByClassName("item");
console.log(categories);

console.log(`Category: ${categories[0].firstElementChild.textContent}`);
console.log(`Elements: ${categories[0].getElementsByTagName("li").length}`);

console.log(`Category: ${categories[1].firstElementChild.textContent}`);
console.log(`Elements: ${categories[1].getElementsByTagName("li").length}`);

console.log(`Category: ${categories[2].firstElementChild.textContent}`);
console.log(`Elements: ${categories[2].getElementsByTagName("li").length}`);



// Napisz skrypt, który:
// Policzy i wprowadzi do wiersza poleceń liczbę kategorii w ul#categories, czyli elementy li.item.
// Dla każdego elementu li.item na liście ul#categories, znajdzie i wprowadzi do wiersza poleceń tekst nagłówka elementu (tag <h2>) i liczbę elementów w kategorii (wszystkich <li>).
// W konsekwencji, w wierszu poleceń znajdą się takie komunikaty.

// Number of categories: 3

// Category: Animals
// Elements: 4

// Category: Products
// Elements: 3

// Category: Technologies
// Elements: 5

