// Using strict mode
"use strict";

// WORKING WITH fUNCTIONS

function logger() {
  console.log("My name is qudus");
}

logger();

function fruitProcessor(apples, oranges) {
  const juice = `Juice with ${apples} apples and ${oranges} oranges.`;
  return juice;
}

const applejuice = fruitProcessor(5, 0);
console.log(applejuice);

const appleOrangeJuice = fruitProcessor(5, 7);
console.log(appleOrangeJuice);
