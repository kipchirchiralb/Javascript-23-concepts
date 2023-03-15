// a higher order function can take in another function as an argument or return a function 

function squareNumber(num){
    console.log("squaring a num")
    return num ** 2
}

function divideByTen(num){
    console.log("dividing a num by ten")
    return num / 10
}

//hof
function calculate(func, x){
    console.log(arguments)
    console.log("hof started")
    return x(func)
    console.log("hof ended")
}

// let result = calculate(50, divideByTen)
// console.log(result)

function taskAllocator(age){
    if(age<18){
        return function school(){
            console.log("go to school")
        }
    }else{
        return function work(){
            console.log("go to work")
        }
    }
}
let task = taskAllocator(1)()
console.log(task)

// fp - hof
// callbacks --
// assynchrounous js - async-- await, .then.catch -- Promised





let colors = ["red", "blue", "yellow"]
colors.forEach(function(elem){
    console.log(elem.length)
})
// sort ,reduce,forEach