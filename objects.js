class Person {
  constructor(name, age) {
    (this.name = name), (this.age = age);
  }

  speak() {
    console.log(this.name + " is speaking ");
  }
}

const student1 = new Person("John", 36);
const student2 = new Person("albert", 36);
student1.speak(); // john
student2.speak(); // albert

console.log(student1.name);

// 2 paragraph with code example describing *this* keyword in js - albert@eldohub.co.ke
// inheritance , polymorphism, abstraction - oop paradigm
