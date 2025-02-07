// prototype in javascript (blueprint)

// constuctor function 

// function Person(name,age) {
//     this.name = name;
//     this.age = age;
// }

// Person.prototype.greet = function (){
//     console.log('helloworld')
// }

// var person1 = new Person('John',20)

// console.log(person1.name);
// person1.greet()

// console.log(person1.__proto__=== Person.prototype)

//class 

// class Person {
//     walk() {
//         console.log("Person walk");
//     }
// }

// class John extends Person { //extends 
//     speak() {
//     console.log('john speaks')
//     }
// }

// const person1 = new John()

// person1.speak()
// person1.walk()

// parent person type banaune student and teacher child 

// Parent Constructor Function
class Person {
    constructor (name, age) {
    this.name = name;
    this.age = age;
}

greet () {
    console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
    }
}

// Child Constructor Function - Student
class Student extends Person {
    constructor(name, age, rollNumber, className, section){
        super(name, age);
        this.rollNumber = rollNumber;
        this.className = className;
        this.section = section;
    }
    study() {
        console.log(`${this.name} (Roll No: ${this.rollNumber}) is studying in ${this.className} - Section ${this.section}.`);
}
}
class Teacher extends Person {
    constructor(name, age, department, level) {
        super(name, age); // Calls the constructor of the Parent class (Person)
        this.department = department;
        this.level = level;
    }

    teach() {
        console.log(`${this.name} is a ${this.level} level teacher in the ${this.department} department.`);
    }
}

// Creating instances
const student1 = new Student("Aayush Pradhan", 21, 11, "BCA", "A");
const teacher1 = new Teacher("Mr. Sagar Bhandari", 29, "MERN Stack", "Senior");

// Calling methods
student1.greet();  // Inherited from Person
student1.study();  // Student specific method

teacher1.greet();  // Inherited from Person
teacher1.teach();  // Teacher specific method


