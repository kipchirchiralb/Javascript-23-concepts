// sequence,selection & iteration flow controls

// sequence - default behavior where code is execute top-down
// selection - choosing to execute a block of code depending a a given condition - if, switch

// iteration/looping - repeating execution of a block of code for a predetermined number of times - for,while

// if statement
let age = 58;
if (age < 18) {
  console.log("Join Kids Program");
} else if (age < 27) {
  console.log("Join Youth program");
} else if (age < 45) {
  console.log("Join adults program");
} else {
  console.log("Join elderly program");
}

let day = "Wednesday"; // change the value
switch (day) {
  case "Monday":
    console.log("It's Monday!");
    break;
  case "Tuesday":
    console.log("It's Tuesday!");
    break;
  case "Wednesday":
    console.log("It's Wednesday!");
    break;
  default:
    console.log("It's either Thursday, Friday, Saturday or Sunday.");
}

// Ternary/Conditional  Operator  condition? trueValue: falseValue
age = 20;
age > 30 ? console.log("You are an adult") : console.log("Not yet there");

// while
let height = 90;
while (height < 300) {
  console.log("great!!!!!" + height);
  height += 10;
}

// for loop
let colors = ["blue", "yellow", "blakdhuhdidhudhduck", "red", "brown"];
console.log(colors.length);

for (let index = 0; index < colors.length; index++) {
  console.log(colors[index] + " has " + colors[index].length + " characters.");
}

// control flows in computer computer programing

// functions & methods
// HOF
// assignments

// object - prototypes - - read
// string and array methods
// assignments
