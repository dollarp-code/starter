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
/*
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
*/

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

// const age = 13;
// if (age >= 18) {
//   console.log(`Sarah can start driving🚗`);
// } else {
//   const yearsLeft = 18 - age;
//   console.log(`Sarah is too young. Wait another ${yearsLeft} years`);
// }

// const birthYear = 2000;

// let century;
// if (birthYear <= 2000) {
//   century = 20;
// } else {
//   century = 21;
// }
// console.log(century);

/*Coding Challenge #2
Use the BMI example from Challenge #1, and the code you already wrote, and
improve it.
Your tasks:
1. Print a nice output to the console, saying who has the higher BMI. The message
is either "Mark's BMI is higher than John's!" or "John's BMI is higher than Mark's!"
2. Use a template literal to include the BMI values in the outputs. Example: "Mark's
BMI (28.3) is higher than John's (23.9)!"
Hint: Use an if/else statement �
GOOD LUCK �  */

// const markWeight = 95;
// const markHeight = 1.76;
// const johnWeight = 85;
// const johnHeight = 1.88;

// const markBMI = markWeight / (markHeight * markHeight);
// const johnBMI = johnWeight / johnHeight ** 2;

// console.log(markBMI, johnBMI);

// if (markBMI > johnBMI) {
//   console.log(`Mark's BMI (${markBMI}) is higher than John's BMI (${johnBMI})`);
// } else {
//   console.log(`John's BMI (${johnBMI}) is higher than Mark's BMI (${markBMI})`);
// }

// const shade = "boy";
// if (shade == "girl") {
//   console.log("shade is a girl");
// } else {
//   console.log("shade is not a girl");
// }

// const country = "Nigeria";
// const population = 33;
// if (population > 33) {
//   console.log(`${country} population is above average`);
// } else {
//   console.log(
//     `${country} population is ${33 - population} million below average`
//   );
// }

// Type Conversion and coercion
// conversion from Strings to Number
// const inputYear = "1991";
// console.log(Number(inputYear), inputYear);
// console.log(inputYear + 10);
// console.log(Number(inputYear) + 10);

// console.log(Number("jonas"));
// console.log(typeof NaN);

// // Conversion from Number to strings
// console.log(String(23), 23);

// // type coercion
// console.log("i am " + 23 + " years old");
// console.log("23" - "10" - 3);
// console.log("23" * "22");
// console.log("23" / "22");

// let n = "1" + 1;
// n = n - 1;
// console.log(n);

// console.log(2 + 3 + 4 + "5");
// console.log("20" - "5" - "4" - 2 + "5");

// Falsy values and truthy values
// 5 falsy values : 0, '', undefined, null, NaN

// console.log(Boolean(0));
// console.log(Boolean(undefined));
// console.log(Boolean("jonas"));
// console.log(Boolean({}));
// console.log(Boolean(""));

// const money = 0;
// if (money) {
//   console.log("Don't spend it all !!");
// } else {
//   console.log("You should get a job");
// }

// let height;
// if (height) {
//   console.log("YAY! Height is defined");
// } else {
//   console.log("Height is undefined");
// }

// Equality operators === or ==
// const age = "18";
// if (age === 18) {
//   console.log("you just became an adult :D (strict)");
// } else {
//   console.log("Not equal to");
// }
// if (age == 18) console.log("you just became an adult :D (loose)");

// const favorite = Number(prompt("Enter your favourite number?"));
// console.log(favorite);
// console.log(typeof favorite);

// if (favorite === 12) {
//   console.log(`cool ${favorite} is an amazing number`);
// } else if (favorite === 7) {
//   console.log(`cool ${favorite} is an amazing number`);
// } else {
//   console.log("Invalid number");
// }

// if (favorite !== 12) console.log("Why not 12");

// Logical operators

// const hasDriversLicense = true; // A
// const hasGoodVision = true; // B

// console.log(hasDriversLicense && hasGoodVision); // AND
// console.log(hasDriversLicense || hasGoodVision); // OR
// console.log(!hasDriversLicense); // NOT

// if (hasDriversLicense && hasGoodVision) {
//   console.log("Shade is ready to drive");
// } else {
//   console.log("Someone else should drive");
// }
// const isTired = true; // C
// console.log(hasDriversLicense && hasGoodVision && isTired);

// if (hasDriversLicense && hasGoodVision && !isTired) {
//   console.log("shade should drive");
// } else {
//   console.log("Shade should not drive");
// }

/* Coding Challenge #3
There are two gymnastics teams, Dolphins and Koalas. They compete against each
other 3 times. The winner with the highest average score wins a trophy!
Your tasks:
1. Calculate the average score for each team, using the test data below
2. Compare the team's average scores to determine the winner of the competition,
and print it to the console. Don't forget that there can be a draw, so test for that
as well (draw means they have the same average score)
3. Bonus 1: Include a requirement for a minimum score of 100. With this rule, a
team only wins if it has a higher score than the other team, and the same time a
score of at least 100 points. Hint: Use a logical operator to test for minimum
score, as well as multiple else-if blocks �
4. Bonus 2: Minimum score also applies to a draw! So a draw only happens when
both teams have the same score and both have a score greater or equal 100
points. Otherwise, no team wins the trophy
Test data:
§ Data 1: Dolphins score 96, 108 and 89. Koalas score 88, 91 and 110
§ Data Bonus 1: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 123
§ Data Bonus 2: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 106
GOOD LUCK */
// SOLUTION

// const dolphinsFirstScore = 97;
// const dolphinsSecondScore = 112;
// const dolphinsThirdScore = 101;
// const koalasFirstScore = 109;
// const koalasSecondScore = 95;
// const koalasThirdScore = 106;
// const minimumScore = 100;
// const dolphinAverageScore =
//   (dolphinsFirstScore + dolphinsSecondScore + dolphinsThirdScore) / 3;
// const koalasAverageScore =
//   (koalasFirstScore + koalasSecondScore + koalasThirdScore) / 3;

// console.log(dolphinAverageScore, koalasAverageScore);

// if (
//   dolphinAverageScore > koalasAverageScore &&
//   dolphinAverageScore >= minimumScore
// ) {
//   console.log("Dolphin is the winner🏆");
// } else if (
//   dolphinAverageScore < koalasAverageScore &&
//   koalasAverageScore >= minimumScore
// ) {
//   console.log("Koalas is the winner 🏆");
// } else if (
//   dolphinAverageScore === koalasAverageScore &&
//   dolphinAverageScore >= minimumScore &&
//   koalasAverageScore >= minimumScore
// ) {
//   console.log("It is a draw!! Both wins the trophy 🏆🏆");
// } else {
//   console.log("Nobody wins the Trophy 😌");
// }

// The switch statement
// const day = "friday";

// switch (day) {
//   case "monday": // day === "monday"
//     console.log("plan course structure");
//     console.log("Go to coding meetup");
//     break;
//   case "tuesday":
//     console.log("prepare theory videos");
//     break;
//   case "wednesday":
//   case "thursday":
//     console.log("Write code examples");
//     break;
//   case "friday":
//     console.log("Record videos");
//     break;
//   case "saturday":
//   case "sunday":
//     console.log("Enjoy the weekend");
//     break;
//   default:
//     console.log("Not a valid day");
// }

// // using if else statement
// if (day === "monday") {
//   console.log("plan course structure");
//   console.log("Go to coding meetup");
// } else if (day === "tuesday") {
//   console.log("prepare theory videos");
// } else if (day === "wednesday" || day === "thursday") {
//   console.log("Write code examples");
// } else if (day === "friday") {
//   console.log("Record videos");
// } else if (day === "saturday" || day === "sunday") {
//   console.log("Enjoy the weekend");
// } else {
//   console.log("day is invalid");
// }

// Expressions and statements : expression is a piece of code that produces a value while statements are bigger code that is executed  which does not produces a value on itself and it usually end with a semi-colon.
// examples of expressions
// 3 + 4;
// 1991;
// true && false && !false;

// // examples of a statement
// if (23 > 10) {
//   const str = "23 is bigger";
// }
// const me = "Daniel";
// console.log(`I'm ${2034 - 1998} years old ${me}`);

// Conditional operator (Ternary operator)
// const age = 19;
// age >= 18
//   ? console.log("allowed to drink wine")
//   : console.log("allowed to drink water");

// const drink = age >= 18 ? "wine" : "water";
// console.log(drink);
// console.log(`I like to drink ${age >= 18 ? "wine" : "water"}`);
// // using if else statement

// let drink2;
// if (age >= 18) {
//   drink2 = "wine";
// } else {
//   drink2 = "water";
// }
// console.log(drink2);

// challenge 4
/*Steven wants to build a very simple tip calculator for whenever he goes eating in a
restaurant. In his country, it's usual to tip 15% if the bill value is between 50 and
300. If the value is different, the tip is 20%.
Your tasks:
1. Calculate the tip, depending on the bill value. Create a variable called 'tip' for
this. It's not allowed to use an if/else statement � (If it's easier for you, you can
start with an if/else statement, and then try to convert it to a ternary
operator!)
2. Print a string to the console containing the bill value, the tip, and the final value
(bill + tip). Example: “The bill was 275, the tip was 41.25, and the total value
316.25”
Test data:
§ Data 1: Test for bill values 275, 40 and 430
Hints:
§ To calculate 20% of a value, simply multiply it by 20/100 = 0.2
§ Value X is between 50 and 300, if it's >= 50 && <= 300  */

//  using conditional operator
const bill = 430;
const tip = bill >= 50 && bill <= 300 ? bill * (15 / 100) : bill * (20 / 100);
const totalValue = bill + tip;
console.log(
  `The bill was ${bill}, the tip was ${tip}, and the total value ${totalValue}`
);

//using if else to solve
// let tip;
// if (bill >= 50 && bill <= 300) {
//   tip = bill * (15 / 100);
// } else {
//   tip = bill * (20 / 100);
// }
// const totalValue = bill + tip;
// console.log(
//   `The bill was ${bill}, the tip was ${tip}, and the total value ${totalValue}`
// );
