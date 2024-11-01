// Person class definition
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  greet() {
    console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
  }

  haveBirthday() {
    this.age += 1;
    console.log(`It's my birthday! I am now ${this.age} years old.`);
  }
}

// Vehicle class definition
class Vehicle {
  constructor(make, model, year) {
    this.make = make;
    this.model = model;
    this.year = year;
    this.isRunning = false;
  }

  start() {
    this.isRunning = true;
    console.log(`${this.make} ${this.model} has started.`);
  }

  stop() {
    this.isRunning = false;
    console.log(`${this.make} ${this.model} has stopped.`);
  }

  getAge(currentYear) {
    return currentYear - this.year;
  }
}

// Testing the Person class
const alice = new Person("Alice", 30);
alice.greet(); // Output: Hello, my name is Alice.
alice.haveBirthday(); // Output: It's my birthday! I am now 31 years old.


const bob = new Person("Bob", 25);
bob.greet(); // Output: Hello, my name is Bob.
bob.haveBirthday(); // Output: It's my birthday! I am now 26 years old.

// Testing the Vehicle class
const car = new Vehicle("Toyota", "Corolla", 2015);
car.start(); // Output: Toyota Corolla has started.
console.log(`Is the car running? ${car.isRunning}`); // Output: Is the car running? true
car.stop(); // Output: Toyota Corolla has stopped.

const truck = new Vehicle("Ford", "F-150", 2018);
truck.start(); // Output: Ford F-150 has started.
console.log(`Is the truck running? ${truck.isRunning}`); // Output: Is the truck running? true
truck.stop(); // Output: Ford F-150 has stopped.

const currentYear = new Date().getFullYear();
console.log(`The car is ${car.getAge(currentYear)} years old.`); // Output depends on current year
console.log(`The truck is ${truck.getAge(currentYear)} years old.`); // Output depends on current year
