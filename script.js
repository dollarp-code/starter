//declaring a variable in javascript
// syntax: let variableName = value*/

/*let firstName = "Hussein";
let secondName = "qudus";
let thirdName = "Dolapo";

console.log(firstName);
console.log(secondName);
console.log(thirdName);

// Assignment
let country = "Nigeria";
let continent = "Africa";
let population = "226";

console.log(country);
console.log(continent);
console.log(population);*/

//Data types in javascript

// let javascriptIsFun = true;
// console.log(typeof javascriptIsFun);

// javascriptIsFun = false;
// console.log(typeof javascriptIsFun);

// let age;
// console.log(typeof age);

// age = 36;
// console.log(typeof age);

// let country = "Nigeria";
// console.log(typeof country);

// Ways in Declaring Variables
/*let birthdayYear;
const club = "Arsenal";
console.log(club);
let captain = "coach";
console.log(captain);
console.log(captain);
captain = "dolapo";*/

//Basic Operators in Javascript
//Mathematical operators
/*const now = 2037;
const ageJonas = now - 1991;
const ageSarah = now - 2019;
console.log(ageJonas, ageSarah);

console.log(ageJonas * 2, ageJonas / 10, 2 ** 3);
// 2 ** 3 means 2 to the power of 3 = 2*2*2

const firstName = "Qudus";
const lastName = "Hussein";
console.log(firstName + " " + lastName);*/

// Assignment operators
/*let x = 10 + 15; // 25
x += 10; // x = x + 10 = 35
x *= 4; // x = x * 4 = 140
x++; // x = x + 1 = 141
x--; // x = x - 1 = 140
x--; // x = x - 1 = 139
console.log(x);*/

// Comparison Operators
/*
console.log(ageJonas > ageSarah);
console.log(ageSarah >= 18);

const isFullAge = ageSarah >= 18;
console.log(isFullAge);

console.log(now - 1991 > now - 2018);

// Order of precedence
let x, y;
x = y = 25 - 10 - 5; // x = y = 10, x = 10
console.log(x, y);

const averageAge = (ageJonas + ageSarah) / 2;
console.log(ageJonas, ageSarah, averageAge);
*/
// Coding Challenge

/* Mark and John are trying to compare their BMI (Body Mass Index), which is
calculated using the formula:
BMI = mass / height ** 2 = mass / (height * height) (mass in kg
and height in meter).
Your tasks:
1. Store Mark's and John's mass and height in variables
2. Calculate both their BMIs using the formula (you can even implement both
versions)
3. Create a Boolean variable 'markHigherBMI' containing information about
whether Mark has a higher BMI than John.
Test data:
§ Data 1: Marks weights 78 kg and is 1.69 m tall. John weights 92 kg and is 1.95
m tall.
§ Data 2: Marks weights 95 kg and is 1.88 m tall. John weights 85 kg and is 1.76
m tall.
*/
// solution
const markWeight = 95;
const markHeight = 1.88;
const johnWeight = 85;
const johnHeight = 1.76;

const markBMI = markWeight / (markHeight * markHeight);
const johnBMI = johnWeight / johnHeight ** 2;
const markHigherBMI = markBMI > johnBMI;

console.log(markBMI);
console.log(johnBMI);
console.log(markHigherBMI);

// Working with Strings and Template Literals
/*
const firstName = "Qudus";
const birthdayYear = 1995;
const year = 2024;
const job = "programmer";

const qudus =
  "I'm " +
  firstName +
  ", a " +
  (year - birthdayYear) +
  " year old " +
  job +
  "!";
console.log(qudus);

// Using Template Literals
const qudusNew = `I'm ${firstName}, a ${year - birthdayYear} year old ${job}!`;
console.log(qudusNew);

console.log(`just a regular string...`);

console.log(`string
with
multiple
lines`);
*/

// Working with control structre
/* syntax 
if(condition) {
    statement  
} else {
    statement
} */

const age = 13;
if (age >= 18) {
  console.log(`Sarah can start driving🚗`);
} else {
  const yearsLeft = 18 - age;
  console.log(`Sarah is too young. Wait another ${yearsLeft} years`);
}

const birthYear = 2000;

let century;
if (birthYear <= 2000) {
  century = 20;
} else {
  century = 21;
}
console.log(century);
