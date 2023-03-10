// function is a reusable block of code

function addTwoNumbers(num1, num2) {
  let result = num1 + num2;
  //   console.log(result);
  //   return result;
}

console.log(addTwoNumbers(2, 4)); // invoking/calling the function
let newResult = addTwoNumbers(20, 40); // let newResult = 60
console.log(newResult);

function checkLengthOfString(str) {
  return str.length;
}

console.log(checkLengthOfString("Alberjhjsdjhsjdhjshdjshdjt"));

// Write a function to print all even numbers greater than 30 and below 50
console.log("********************");
/*

function printEvenNumbers() {
  for (let i = 32; i < 50; i += 2) {
    console.log(i);
  }
}
printEvenNumbers();


*/

function evenNumbers(lowerLimit, upperLimit) {
  let runningNumber = lowerLimit + 1;

  for (runningNumber; runningNumber < upperLimit; runningNumber++) {
    if (runningNumber % 2 == 0) {
      // the number is even
      console.log(runningNumber);
    }
  }
}

evenNumbers(30, 50);

// Write a function that takes an array of numbers as an argument and returns the sum of the numbers in the array. Then, call the function and print the result to the console.

function sumElementsInArray(numArr) {
  let sum = 0;
  for (let index = 0; index < numArr.length; index++) {
    // index= 0
    // sum = 0 + 2 = 2
    // index = 0+1
    // **********
    //index = 1
    // sum = 2+ 3 = 5
    // index = 1+1 = 2
    //**********
    //index = 2
    // sum = 5+ 4 =9
    // index= 2+1 = 3
    // ********
    // index = 3
    // sum = 9 +5 = 14
    // index=3+1 = 4
    //******
    //index = 4 -- 4!<4 - loop terminates
    sum += numArr[index];
  }
  return sum;
}

console.log(sumElementsInArray([2, 5, 6, 666, 4646, 3, 4, 5]));

// Write a function that takes a string as an argument and returns the string with all vowels removed.

// Write a function that takes an array of numbers as an argument and returns the average of those numbers.

let kansoul = {
  members: ["mejja", "madtrax", "buganya"],
  albums: 5,
  sing: function (title) {
    console.log(this.members[0]);
    // write dom manipulation code to pick the song and play it
  },
};

kansoul.sing("Hello world"); // sing is a method in the kansoul object

console.log(Math.random() * 20 + 10); // 5

function sing(title) {
  console.log(title);
}
