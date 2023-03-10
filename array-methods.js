const students = ["albert", "mathew", "sheila", "kenneth"];

function addNewStudent(arr, name) {
  arr.push(name);
}
function func2(var1, var2) {
  console.log(var1, var2);
}
// func2(2,3)

console.log(students);

addNewStudent(students, "Jedial"); // added jedial to students array

addNewStudent(students, "Benjamin"); // added Benjamin to students array

students.pop(); // remove last elem of array - remove benjamin from students array

console.log(students);

// console.log(students);
