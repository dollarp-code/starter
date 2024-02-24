// Using strict mode
"use strict";

// WORKING WITH fUNCTIONS

function logger() {
  console.log("My name is qudus");
}
// calling / invoking
logger();

function fruitProcessor(apples, oranges) {
  const juice = `Juice with ${apples} apples and ${oranges} oranges.`;
  return juice;
}

const applejuice = fruitProcessor(5, 0);
console.log(applejuice);

const appleOrangeJuice = fruitProcessor(5, 7);
console.log(appleOrangeJuice);

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
const age2 = calcAge2(1999);

console.log(age1, age2);
