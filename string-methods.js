let name = "Albert"; // created an instance of a string object

let school = new String("jkuat"); // created an instance of a string object

console.log(name.charAt(0));
console.log(school.charAt(0));

let arr = [2.3, 4]; // new Array([1,2,3])

console.log(arr);

// "albert"
//  chartAt(0) - returns the cahrater at index number 0
let fname = "Albert"
let sname = "Kibet"
// concat() - string concatenation
console.log(fname.concat(" ", sname))

// indexOf of the first appearence
console.log(fname.indexOf("y"))

// write a fucntion to count the number of occurence of a character in string
// e.g. "congratulations", "n-2","a-2","c-1"
// slice, indexOf

function charCounter(word,letter){
    // logic
    // check if the letter exists in the word
    
    if(word.indexOf(letter) === -1){
        console.log("letter "+ letter + " not found in " + word)
    }else{
        // letter found atleast once
        // CREATE A LOOP, EACH TIME SLICING THE STRING at the index of the first appearence and call the charCunter on the new string - recursion

        let count = word.split(letter).length - 1 
        
        console.log("letter "+ letter + " appears " + count + " times in " + word)

    }

}
charCounter("congxratulxatixons", "x")
charCounter("albert", "a")
charCounter("youtube", "b")
