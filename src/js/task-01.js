"use strict";

// const listItems = list.children;
// console.log(listItems);

// //to wyżej czy to niżej?

// const categoryItems =
// document.querySelectorAll(".li.item");
// console.log(categoryItems);

//---------------------------

const listItems = list.children;
console.log(listItems);

const numberOfItems = [...listItems.length];
console.log(numberOfItems);


const categories =
    document.querySelectorAll("h2");


console.log(`"Category: " $categories`);
console.log(`"Elements: " $numberOfItems`);



const heading = document.createElement("h2");

    
if (num1 > num2) {
  biggerNumber = num1;
} else {
  biggerNumber = num2;
}

const num = (num1 > num2) ? num1 : num2; 






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

