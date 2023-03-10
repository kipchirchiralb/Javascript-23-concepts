/**
 * Arithmetic + - * / %
 * Assignment =, += , -=, *=, /=
 * Comparison (return a boolean) ==, ===, !=, !==,>,<,>=,<=
 * Logical operators &&(AND) , ||(OR), !(NOT)
 * Unary --, ++
 * Ternary/Conditional  Operator  condition? trueValue: falseValue
 */
console.log(170 % 2); // check if a number is even
console.log(177 % 10); // check if a multiple of ten

let age = 30; // assignment
console.log(age); //30
// age += 10;     // adds 10 to previous value of age // 40
age = age + 10; // adds 10 to previous value of age
console.log(age);

let num = 5;
num *= 3; // multiply the previous value of num by three
// num = num *3
console.log(num); // 15

// comparison
console.log(5 == 5); // true
console.log(5 != 5); // false
console.log(3 > 5); // false
console.log(5 <= 5); // true
console.log("***************");
console.log(5 == "5"); //true - loose equality - type coercion
console.log(5 === "5"); //false - strict equality(checks for the data type)
console.log("***************");
// logical operators

// TRUTH TABLE - discrete math

console.log(3 > 5 && 5 < 4); // false && false = false
console.log(3 < 5 && 5 < 4); // true && false = false
console.log(3 < 5 || 5 < 4); // true || false = true
console.log(!true); //false
console.log(!5 < 6); //false
const error = true

console.log("************");
// unary operator

let value = 2;
value++; // adds 1 to value
console.log(value); //3
value++;
console.log(value); // 4
value--; // 3
console.log(value--); //2 ---- 3
console.log(value); //2
console.log(--value); //1 ----1
