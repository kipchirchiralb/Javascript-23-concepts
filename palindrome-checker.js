// Write a function that takes a string as an argument and returns a boolean indicating whether the string is a palindrome (a word or phrase that reads the same forwards and backwards). You can use string methods such as split(), reverse(), and join() to accomplish this task.
function isPalindrome(str){
    str = str.toLowerCase()
    return str === str.split("").reverse().join("")
}
console.log(isPalindrome("Mom"))
console.log(isPalindrome("2002"))
console.log(isPalindrome("3030"))
console.log(isPalindrome("AlbErt"))
// albert === trebla
// console.log("mom" === "mom") // false
// mom === mom
