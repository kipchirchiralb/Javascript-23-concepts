// Write a function that takes a string as an argument and returns the longest word in the string. You can use string methods such as split(), sort(), and length to accomplish this task.

function longestWordInSentence(sentence){
    let sentenceArray = sentence.split(" ")
    // console.log(sentenceArray)
    let longestWord = ""
    let lengthOfLongestWord = 0
    for(let index = 0; index<sentenceArray.length; index++){
        // console.log(sentenceArray[index] + " is at index " + index)
        if(sentenceArray[index].length > longestWord.length){
            // "this" > "" ? longestWord="this"
            // "is" > "this" ? :
            // "a" > "this" ? :
            // "full-stack" > "this" : logestWord = "full-stack"
            // "web" > "full-stack" ? :
            // "dev" > "full-stack" ? :
            // "course" > "full-stack" ? :
            longestWord = sentenceArray[index]
            lengthOfLongestWord = sentenceArray[index].length
             // longest = "full-stack"   
        }
    }

    // return "the longest word" + longestWord + " has " + lengthOfLongestWord + " characters "
    //template literals
    return `the longest word ${longestWord} has ${lengthOfLongestWord} characters`
}

let res = longestWordInSentence("This is a fullstack web development course")
let res2 = longestWordInSentence("This is a different string passed as a value to this method")
console.log(res)
console.log(res2)




// function longestWord(str){
//     // logic
//     // convert string to an array of words
//     // reduce(()=>) -- mdn
//     // loop through the array of words checking the length of each word, idenify the longest word
//     let strArr = str.split(" ")
//     // console.log(strArr)
//     return strArr.reduce(function(accumulator,nextElem){
//         if(nextElem.length> accumulator.length){

//             return nextElem
//         }else{
//             return accumulator
//         }
//     })
// }
// console.log(longestWord("My name is conratulations Albert. I am a software Developer")) // Developer