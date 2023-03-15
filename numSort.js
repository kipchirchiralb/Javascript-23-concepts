let numbersArray = [1,2,44,5,4,64,5,5,56,60,200,300,45]

let sortedNumbers = numbersArray.sort()

console.log(sortedNumbers)


let truelySortedNumbers = numbersArray.sort(function(a, b){
    if (a > b) {
      return 1;
    }
    if (a < b) {
      return -1;
    }
    return 0;   
  });

// 
