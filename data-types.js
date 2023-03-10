/**
 * *Primitive types
 * Number
 * String
 * Boolean
 * Undefined
 * Null
 *
 * *Complex types
 * Object
 * Array
 * Function
 */
// Statically-typed languages(must indicate the type when declaring) & dynamically-typed langauages(types are assinged at runtime)
// Js is Dynamically typed
let age = 50; // initializing a number varable
let name = "ALbert K_%^4353'';"; //string
let isLoggedIn = true; // boolean true
let isLoggedOut = false; // boolean false
let yes = true;
let no = false;
let varrr; //undefined
let adress = null; //null datatype
// console.log(typeof no); // check type using typeof

// Object datatype
let person = {
  age: 10,
  height: 5,
  skinTone: "chocolocate",
  "born in": 1995,
  isKenyan: false,
  run: function () {
    console.log("......running...");
  },
};
person.run();
console.log(person.age); // using dot notation to access a value in an object
console.log(person["born in"]); // using bracket notation to acess a value in an object
person.age = 26;
let num = 26;
// person = {}; // type error - reasigning a const variable
console.log(person.age); // passed by reference
console.log(num); // passed by value

// passing by value vs by reference

// Array - an ordered(zero indexed) list of values enclosed in square brackets
let numbers = [1, 2, 3, "5", "7"];

const data = [
  { age: 10, isKenyan: true },
  ["blue", "yellow"],
  54,
  true,
  "false",
];
console.log(numbers[0]); // value at index 0 in numbers array

// print yellow from the data array
console.log(data[1][1]); //yellow
// print the value for isKenyan(true) from data array
console.log(data[0]["isKenyan"]); // true
console.log(data[0].isKenyan); // true
// square (arrays), curly (block or object), parenthesis(functions)
const salesData = {
  Q1: [500, 700, 400],
  Q2: [800, 200, 600],
  Q3: [300, 900, 100],
  Q4: [600, 400, 800],
};
/**
 * Access the sales data for Q2 and the first item in the array
 * Access the sales data for Q3 and the third item in the array.
 * Update the sales data for Q4 to be [700, 500, 900].
 * Add a new quarter to the sales data called "Q5" with values [100, 200, 300].
 * Access the second item in the sales data for Q1, Q2, Q3, and Q4, and calculate the average of those values.
 *  */

salesData.Q5 = [100, 200, 300];

console.log(salesData);
