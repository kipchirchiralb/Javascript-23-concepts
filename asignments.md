## TASKS

• Write a function to print all even numbers greater than 30 and below 50

• Write a program that uses prompt() to ask the user for their name and age, and then uses alert() to display a message to the user.(BROWSER) - - confrim()

• Write a function that takes two numbers as arguments and returns the sum of the numbers. Then, call the function and RETURN the result.

• Write a program that defines an object that represents a person, with properties for name, age, and city. Then, use dot notation to access and print the values of the object's properties.

• Write a function that takes an array of numbers as an argument and returns the sum of the numbers in the array. Then, call the function and print the result to the console. 

//read on prototypes

- Write a function that takes a string as an argument and returns the string with all vowels removed.

- Write a function that takes a string as an argument and returns an object with the count of each letter in the string.

- Write a function that takes a string as an argument and returns the string with all words in reverse order.

- Write a function that takes an array of numbers as an argument and returns the average of those numbers.

### RECURSION

- Write a function that takes a number as an argument and returns the factorial of that number.

**function factorial(num) {
if (num === 0 || num === 1) {
return 1;
} else {
return num \* factorial(num - 1);
}
}**
console.log(factorial(5)); // Output: 120
console.log(factorial(7)); // Output: 5040

- Palindrome checker: Write a function that takes a string as an argument and returns a boolean indicating whether the string is a palindrome (a word or phrase that reads the same forwards and backwards). You can use string methods such as split(), reverse(), and join() to accomplish this task.

- Reverse string: Write a function that takes a string as an argument and returns the string reversed. You can use string methods such as split(), reverse(), and join() to accomplish this task.

- Longest word in a string: Write a function that takes a string as an argument and returns the longest word in the string. You can use string methods such as split(), sort(), and length to accomplish this task.

- Array flattening: Write a function that takes a nested array as an argument and returns a flattened array. You can use array methods such as concat(), reduce(), and flat() to accomplish this task.

- Count the number of unique items in an array, e.g. ['1', '2','b','b','c','2','d','d','d','1','b'] . hint: Use Set.size

// example interview question, Give the array below
const ARTICLES = [
{
title: 'A message to our customers',
upvotes: 12,
date: '2020-01-24',
},
{
title: 'Alphabet earnings',
upvotes: 22,
date: '2019-11-23',
},
{
title: 'Artificial Mountains',
upvotes: 2,
date: '2019-11-22',
},
{
title: 'Scaling to 100k Users',
upvotes: 72,
date: '2019-01-21',
},
{
title: 'the Emu War',
upvotes: 24,
date: '2019-10-21',
},
{
title: "What's SAP",
upvotes: 1,
date: '2019-11-21',
},
{
title: 'Simple text editor has 15k monthly users',
upvotes: 7,
date: '2010-12-31',
},
];

Q: sort without **mutating** based on

a) upvotes (ascending and descending)
b) date (asc and desc)
