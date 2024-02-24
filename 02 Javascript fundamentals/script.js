// Using strict mode
"use strict";

// WORKING WITH fUNCTIONS

function logger() {
  console.log("My name is qudus");
}
// calling / invoking
logger();

// function fruitProcessor(apples, oranges) {
//   const juice = `Juice with ${apples} apples and ${oranges} oranges.`;
//   return juice;
// }

// const applejuice = fruitProcessor(5, 0);
// console.log(applejuice);

// const appleOrangeJuice = fruitProcessor(5, 7);
// console.log(appleOrangeJuice);

// Types of functions 1. function decleration 2. function expression
// 1. Function declaration
function calcAge1(birthyear) {
  const age = 2024 - birthyear;
  return age;
}
const age1 = calcAge1(1999);

// 2. Function Expression
const calcAge2 = function (birthyear) {
  return 2024 - birthyear;
};
const age2 = calcAge2(1994);

console.log(age1, age2);

// 3. Arrow Functions
const calcAge3 = (birthyear) => 2024 - birthyear;
const age3 = calcAge3(1995);
console.log(age3);

const yearsUntilRetirement = (birthyear, firstName) => {
  const age4 = 2037 - birthyear;
  const retirement = 65 - age4;
  return `${firstName} retires in ${retirement} years`;
};

console.log(yearsUntilRetirement(1994, "Sodiq"));
console.log(yearsUntilRetirement(1999, "Rasak"));

// Fnctions calling another functions
function cutFruitPieces(fruit) {
  return fruit * 4;
}

function fruitProcessor(apples, oranges) {
  const applePieces = cutFruitPieces(apples);
  const orangePieces = cutFruitPieces(oranges);
  const juice = `juice with ${applePieces} pieces of apple and ${orangePieces} pieces of orange.`;
  return juice;
}

console.log(fruitProcessor(2, 3));
