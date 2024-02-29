// Using strict mode
"use strict";

// WORKING WITH fUNCTIONS

// function logger() {
//   console.log("My name is qudus");
// }
// // calling / invoking
// logger();

// function fruitProcessor(apples, oranges) {
//   const juice = `Juice with ${apples} apples and ${oranges} oranges.`;
//   return juice;
// }

// const applejuice = fruitProcessor(5, 0);
// console.log(applejuice);

// const appleOrangeJuice = fruitProcessor(5, 7);
// console.log(appleOrangeJuice);

// Types of functions 1. function decleration 2. function expression 3. Arrow function
// 1. Function declaration
// function calcAge1(birthyear) {
//   const age = 2024 - birthyear;
//   return age;
// }
// const age1 = calcAge1(1999);

// // 2. Function Expression
// const calcAge2 = function (birthyear) {
//   return 2024 - birthyear;
// };
// const age2 = calcAge2(1994);

// console.log(age1, age2);

// // 3. Arrow Functions
// const calcAge3 = (birthyear) => 2024 - birthyear;
// const age3 = calcAge3(1995);
// console.log(age3);

// const yearsUntilRetirement = (birthyear, firstName) => {
//   const age4 = 2037 - birthyear;
//   const retirement = 65 - age4;
//   return `${firstName} retires in ${retirement} years`;
// };

// console.log(yearsUntilRetirement(1994, "Sodiq"));
// console.log(yearsUntilRetirement(1999, "Rasak"));

// // Fnctions calling another functions
// function cutFruitPieces(fruit) {
//   return fruit * 4;
// }

// function fruitProcessor(apples, oranges) {
//   const applePieces = cutFruitPieces(apples);
//   const orangePieces = cutFruitPieces(oranges);
//   const juice = `juice with ${applePieces} pieces of apple and ${orangePieces} pieces of orange.`;
//   return juice;
// }

// console.log(fruitProcessor(2, 3));

/*Write a function called describeCountry which takes three parameters: country, population and capitalCity. Based on this input, the function returns a string with this format: 'Finland has 6 million people and its capital city is Helsinki'.

Call this function 3 times, with input data for 3 different countries. Store the returned values in 3 different variables, and log them to the console.

 */

// function describeCountry(country, population, capitalCity) {
//   return `${country} has ${population} million people and its capital city is ${capitalCity}`;
// }

// const descNigeria = describeCountry("Nigeria", 10, "Abuja");
// const descAmerica = describeCountry("America", 15, "Washington DC");
// const descGhana = describeCountry("Ghana", 7, "Accra");
// console.log(descNigeria);
// console.log(descAmerica);
// console.log(descGhana);

/*Coding Challenge #1
Back to the two gymnastics teams, the Dolphins and the Koalas! There is a new
gymnastics discipline, which works differently.
Each team competes 3 times, and then the average of the 3 scores is calculated (so
one average score per team).
A team only wins if it has at least double the average score of the other team.
Otherwise, no team wins!
Your tasks:
1. Create an arrow function 'calcAverage' to calculate the average of 3 scores
2. Use the function to calculate the average for both teams
3. Create a function 'checkWinner' that takes the average score of each team
as parameters ('avgDolhins' and 'avgKoalas'), and then logs the winner
to the console, together with the victory points, according to the rule above.
Example: "Koalas win (30 vs. 13)"
4. Use the 'checkWinner' function to determine the winner for both Data 1 and
Data 2
5. Ignore draws this time
Test data:
§ Data 1: Dolphins score 44, 23 and 71. Koalas score 65, 54 and 49
§ Data 2: Dolphins score 85, 54 and 41. Koalas score 23, 34 and 27
Hints:
§ To calculate average of 3 values, add them all together and divide by 3
§ To check if number A is at least double number B, check for A >= 2 * B.
Apply this to the team's average scores �*/

// const calcAverage = (score1, score2, score3) => (score1 + score2 + score3) / 3;
// // Test 1
// let scoreDolphins = calcAverage(44, 23, 71);
// let scoreKoalas = calcAverage(65, 54, 49);

// console.log(scoreDolphins, scoreKoalas);

// function checkWinner(avgDolphins, avgKoalas) {
//   if (avgDolphins >= 2 * avgKoalas) {
//     console.log(`Dolphins win ${avgDolphins} vs ${avgKoalas}`);
//   } else if (avgKoalas >= 2 * avgDolphins) {
//     console.log(`Koalas win ${avgKoalas} vs ${avgDolphins}`);
//   } else {
//     console.log("Nobody wins");
//   }
// }

// checkWinner(scoreDolphins, scoreKoalas);

// // Test 2
// scoreDolphins = calcAverage(85, 54, 41);
// scoreKoalas = calcAverage(23, 34, 27);

// console.log(scoreDolphins, scoreKoalas);

// checkWinner(scoreDolphins, scoreKoalas);
// checkWinner(77, 160);

// // using Function declaration
// function percentageOfWorld1(population) {
//   return (population / 7900) * 100;
// }

// const populationNigeria = percentageOfWorld1(2555);
// const populationGhana = percentageOfWorld1(3441);
// const populationRwanda = percentageOfWorld1(1993);
// console.log(populationNigeria, populationGhana, populationRwanda);

// // using function expression
// const percentageOfWorld2 = function (population) {
//   return (population / 7900) * 100;
// };

// const populationChina = percentageOfWorld2(2555);
// const populationTogo = percentageOfWorld2(3441);
// const populationAmerica = percentageOfWorld2(1993);
// console.log(populationNigeria, populationGhana, populationRwanda);

// // using Arrow function
// const percentageOfWorld3 = (population) => (population / 7900) * 100;

// const populationAngola = percentageOfWorld3(2555);
// const populationMorocco = percentageOfWorld3(3441);
// const populationSenegal = percentageOfWorld3(1993);
// console.log(populationAngola, populationMorocco, populationSenegal);

// // function calling function
// const describePopulation = function (country, population) {
//   return `${country} has ${population} million people, which is about ${percentageOfWorld1(
//     population
//   )}% of the world.`;
// };

// console.log(describePopulation("Nigeria", 2555));

// Arrays

// const friends = ["Micheal", "Steven", "Dolapo"];
// const age = new Array(1991, 1983, 1987, 2020);

// console.log(friends);
// console.log(friends[0]);
// console.log(friends.length);
// console.log(friends[friends.length - 1]);

// friends[1] = "Daniel";
// console.log(friends);

// const jonas = [friends, age, "Hussein", 2037 - 1991, "Teacher"];

// console.log(jonas);

// // Exercise
// const calcAge = function (birthyear) {
//   return 2037 - birthyear;
// };
// const years = [1990, 1967, 2002, 2010, 2018];
// const age1 = calcAge(years[0]);
// const age2 = calcAge(years[1]);
// const age3 = calcAge(years[years.length - 1]);
// console.log(age1, age2, age3);

// const ages = [
//   calcAge(years[0]),
//   calcAge(years[1]),
//   calcAge(years[years.length - 1]),
// ];
// console.log(ages);

const friends = ["Micheal", "Steven", "Dolapo"];

// Adding elements to array usine push and unshift
friends.push("rose"); // add element at the end of the array
console.log(friends);

const newlength = friends.unshift("lekan"); // add element at the begining of the array
console.log(friends);
console.log(newlength);

// removing elements from the array using pop and shft
friends.pop(); // removes element at the end of the array
console.log(friends);

friends.shift(); // removes element at the begining of the array
console.log(friends);

console.log(friends.indexOf("Dolapo")); // checking for the index of an element
console.log(friends.includes("Dolapo")); // checking wether an element is in the array and it returs a boolean
console.log(friends.includes("barbie"));

if (friends.includes("Dolapo")) {
  console.log("you have a friend called Dolapo");
}

//coding challenge
/*Steven is still building his tip calculator, using the same rules as before: Tip 15% of
the bill if the bill value is between 50 and 300, and if the value is different, the tip is
20%.
Your tasks:
1. Write a function 'calcTip' that takes any bill value as an input and returns
the corresponding tip, calculated based on the rules above (you can check out
the code from first tip calculator challenge if you need to). Use the function
type you like the most. Test the function using a bill value of 100
2. And now let's use arrays! So create an array 'bills' containing the test data
below
3. Create an array 'tips' containing the tip value for each bill, calculated from
the function you created before
4. Bonus: Create an array 'total' containing the total values, so the bill + tip
Test data: 125, 555 and 44
Hint: Remember that an array needs a value in each position, and that value can
actually be the returned value of a function! So you can just call a function as array
values (so don't store the tip values in separate variables first, but right in the new
array)  */

// solution

// function calcTip(bill) {
//   const tip = bill >= 50 && bill <= 300 ? bill * (15 / 100) : bill * (20 / 100);
//   return tip;
// }

// const bills = [125, 555, 44];

// const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];

// console.log(bills, tips);

// const total = [tips[0] + bills[0], tips[1] + bills[1], tips[2] + bills[2]];

// console.log(total);

// // OBJECTS IN JAVASCRIPT

// const sodiq = {
//   firstName: "Rasaq",
//   lastName: "Sodiq",
//   age: 27,
//   job: "Engineer",
//   friends: ["Daniel", "Meekcee", "Jonas"],
// };
// console.log(sodiq);
// // Dot Notation
// console.log(sodiq.firstName);

// // bracket notation
// console.log(sodiq["firstName"]);

// const interestedIn = prompt(
//   "what do you want to know about sodiq? choose between age, firstName, lastName, job, friends"
// );

// if (sodiq[interestedIn]) {
//   console.log(sodiq[interestedIn]);
// } else {
//   console.log("Wrong request");
// }

// // How to add properties to object

// sodiq.location = "Nigeria"; // using dot notation
// sodiq["twitter"] = "@hareskaysodiq"; // using bracket notation
// console.log(sodiq);

// //challenge
// // "sodiq has 3 friends, and his best friend is called Meekcee"

// console.log(
//   `${sodiq.lastName} has ${sodiq.friends.length} friends, and his best friend is called ${sodiq.friends[1]}`
// );

// object method
// const sodiq = {
//   firstName: "Rasaq",
//   lastName: "Sodiq",
//   birthYear: 1991,
//   job: "Engineer",
//   friends: ["Daniel", "Meekcee", "Jonas"],
//   hasDriversLicense: true,
//   // calcAge: function (birthYear) {
//   //   return 2037 - birthYear;
//   // },

//   // using this keyword
//   // calcAge: function () {
//   //   return 2037 - this.birthYear;
//   // },

//   calcAge: function () {
//     this.age = 2037 - this.birthYear;
//     return this.age;
//   },

//   getSummary: function () {
//     return `${this.lastName} is a ${this.calcAge()}-year old ${
//       this.job
//     }, and he has ${this.hasDriversLicense ? "a" : "no"} driver's license.`;
//   },
// };

// console.log(sodiq.calcAge());
// console.log(sodiq.age);

// // challenge
// // "Sodiq is a 46-year old teacher, and he has a driver's license"

// console.log(sodiq.getSummary());

/*Coding Challenge #3
Let's go back to Mark and John comparing their BMIs! This time, let's use objects to
implement the calculations! Remember: BMI = mass / height ** 2 = mass
/ (height * height) (mass in kg and height in meter)
Your tasks:
1. For each of them, create an object with properties for their full name, mass, and
height (Mark Miller and John Smith)
2. Create a 'calcBMI' method on each object to calculate the BMI (the same
method on both objects). Store the BMI value to a property, and also return it
from the method
3. Log to the console who has the higher BMI, together with the full name and the
respective BMI. Example: "John's BMI (28.3) is higher than Mark's (23.9)!"
Test data: Marks weights 78 kg and is 1.69 m tall. John weights 92 kg and is 1.95 m
tall. */

// solution
// const mark = {
//   fullName: "Mark Miller",
//   weight: 78,
//   height: 1.69,
//   calcBMI: function () {
//     this.bmi = this.weight / this.height ** 2;
//     return this.bmi;
//   },
// };

// const john = {
//   fullName: "John Smith",
//   weight: 92,
//   height: 1.95,
//   calcBMI: function () {
//     this.bmi = this.weight / this.height ** 2;
//     return this.bmi;
//   },
// };

// mark.calcBMI();
// john.calcBMI();

// console.log(mark.bmi, john.bmi);

// if (mark.bmi > john.bmi) {
//   console.log(
//     `${mark.fullName} BMI ${mark.bmi} is higher than ${john.fullName} BMI ${john.bmi}`
//   );
// } else if (john.bmi > mark.bmi) {
//   console.log(
//     `${john.fullName} BMI ${john.bmi} is higher than ${mark.fullName} BMI ${mark.bmi}`
//   );
// }

// For loop control Structure
// loops keeps running while conditions is TRUE
for (let rep = 1; rep <= 10; rep++) {
  console.log(`lifting weights repetition ${rep}`);
}

function operationss(ball, book, food, fan) {
  return (ball * book) / food + fan;
}

console.log(operationss(2, 4, 6, 6));

// Looping Arrays Breakking and continuing

const jonas = [friends, "age", "Hussein", 2037 - 1991, "Teacher"];

const types = [];

for (let i = 0; i < jonas.length; i++) {
  // Reading from jonas array
  console.log(jonas[i], typeof jonas[i]);

  // Filling types of array
  // types[i] = typeof jonas[i];
  types.push(typeof jonas[i]);
}

console.log(types);

const years = [1991, 2007, 1989, 2020];
const ages = [];

for (let i = 0; i < years.length; i++) {
  ages.push(2037 - years[i]);
}

console.log(ages);

// continue and break: continue is to exit the current iteration of the loop and continue to the next one, break is used to terminate the whole loop

console.log("----- ONLY STRINGS -----");
for (let i = 0; i < jonas.length; i++) {
  if (typeof jonas[i] !== "string") continue;

  console.log(jonas[i], typeof jonas[i]);
}

console.log("----- BREAK WITH NUMBERS -----");
for (let i = 0; i < jonas.length; i++) {
  if (typeof jonas[i] === "number") break;

  console.log(jonas[i], typeof jonas[i]);
}

// looping backwards  4, 3, ...., 0
for (let i = jonas.length - 1; i >= 0; i--) {
  console.log(i, jonas[i]);
}

// loops in loops
for (let exercise = 1; exercise < 4; exercise++) {
  console.log(`---------Starting exercise ${exercise}`);

  for (let rep = 1; rep < 6; rep++) {
    console.log(`Exercise ${exercise}: Lifting weight repetions ${rep}`);
  }
}

// while loop

let rep = 1;
while (rep <= 10) {
  // console.log(`WHILE: lifting weights repetition ${rep}`);
  rep++;
}

let dice = Math.trunc(Math.random() * 6) + 1;
while (dice !== 6) {
  console.log(`you rolled a ${dice}`);
  dice = Math.trunc(Math.random() * 6) + 1;
  if (dice === 6) console.log("loop is about to end");
}

// challenge 4
/*Let's improve Steven's tip calculator even more, this time using loops!
Your tasks:
1. Create an array 'bills' containing all 10 test bill values
2. Create empty arrays for the tips and the totals ('tips' and 'totals')
3. Use the 'calcTip' function we wrote before (no need to repeat) to calculate
tips and total values (bill + tip) for every bill value in the bills array. Use a for
loop to perform the 10 calculations!
Test data: 22, 295, 176, 440, 37, 105, 10, 1100, 86 and 52
Hints: Call ‘calcTip ‘in the loop and use the push method to add values to the
tips and totals arrays �
Bonus:
4. Bonus: Write a function 'calcAverage' which takes an array called 'arr' as
an argument. This function calculates the average of all numbers in the given
array. This is a difficult challenge (we haven't done this before)! Here is how to
solve it:
4.1. First, you will need to add up all values in the array. To do the addition,
start by creating a variable 'sum' that starts at 0. Then loop over the
array using a for loop. In each iteration, add the current value to the
'sum' variable. This way, by the end of the loop, you have all values
added together
4.2. To calculate the average, divide the sum you calculated before by the
length of the array (because that's the number of elements)
4.3. Call the function with the 'totals' array */

const calcTip = function (bill) {
  return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
};

/* Write your code below. Good luck! 🙂 */

const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
const tips = [];
const totals = [];

for (let i = 0; i < bills.length; i++) {
  const tip = calcTip(bills[i]);
  tips.push(tip);
  totals.push(tip + bills[i]);
}
console.log(bills);
console.log(tips);
console.log(totals);

const calcAverage = function (arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum = sum + arr[i];
  }
  return sum / arr.length;
};

console.log(calcAverage(totals));
