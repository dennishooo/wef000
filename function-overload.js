"use strict";

james = {
  role: "teacher",
};

class Person {
  constructor(obj) {
    this.name = obj.name;
    this.age = obj.age;
    this.role = obj.role;
  }
}

let dennis = new Person({ name: "dennis", age: 11, role: "teacher" });

// let dennis = createPerson("dennis", undefined, 12);
// /**
//  *
//  * @param {string} name
//  * @param {string} role
//  * @param {number} age
//  * @returns {Person}
//  */

// function createPerson(name, role, age) {
//   let person = new Person(name, role, age);
//   return person;
// }

console.log(dennis);

let greet = (person) => {
  switch (person.role) {
    case "teacher":
      console.log("morning students");
      break;
    case "student":
      console.log("good morning miss");
      break;
    default:
      console.log("who am i?");
  }
};

greet(james);
greet(dennis);
// const greetJames = greet.bind(james);
// greetJames();
// james.greet.bind(james);

// james.greet();

// function countTo(num = 10) {
//   for (let i = 0; i < num; i++) {
//     console.log(i);
//   }
// }

// countTo(100);
