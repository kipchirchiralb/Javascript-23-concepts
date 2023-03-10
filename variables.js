// let, const var
let username = "albert"; // block scoped
const email = "albert@gmail.com"; //block scoped
var age = 36; // less used (before es6) //function scoped

{
  let var1 = "variable 1";
  const var2 = "variable 2";
  var var3 = "variable 3";
  console.log(var1);
  console.log(var2);
}
username = "Jorit";
// email = "jorit@gmail.com";
// let imageUrl = "http://"

// console.log(imageUrl);
// comment in js - not considered code therefore not executable
// single line comment
/*
    multiple line comment
    another line of comment
*/
console.log(email);
console.log(age);
console.log(var3);
// let  var3 = "variable 4"
console.log("My name is Albert");

function funcScopeTest() {
  // function scope
  let var4 = 4;
  const var5 = 5;
  var var6 = 6;
}

console.log(var6); // this is not defined outside the function scope

// Variable naming rules in js
/**
 * cannot be a reserved keyword
 * begin with either a letter, underscore(_), or a dolar sign($)
 * varaible names are caseSensitive
 */

let $p = "jej";
let Hello = "hello &$ ..f 8595";

{
  console.log(Hello);
}
// Naming conventions in Javascript(html+css)
/**
 * camelCaseConvention - naming variables
 * kebab-case - naming classes(html)
 * snake_case -
 * PascalCase - naming classes(JS oop)
 */
