// // {} object literals - template literals

// const person = {
//     name: "aayush",
//     age: 30, 
//     greet: function (){
//         console.log(`${this.name} is ${this.age} years old.`); // this is not a primitive data type 
//     }
// }

// // console.log(person.name); //console.log(person["name"]) // 2 types to acess 

// console.log(person.greet());

// const person = new Object(); //by using constructure - secondary option;
// person.name = "Aayush";
// person.age = 20;

// console.log(person.name);

// person.name = 'shyam';

// console.log(person);

// delete person.age
// console.log(person)

// person.address = " nepal"

// console.log(person)

// Object.freeze(person); // completely freeze

// Object.seal(person); // can modify but cannot delete or add new 
// person.name = 'hari'
// person.address = 

const detail = {
    name: "bikash",
    age: 25,
    ID: 12,

    greet: function() {
        console.log(`${this.name} ${this.ID} number is ${this.age} years old.`);
    }
}

// console.log(detail.age);

detail.age = 31;
detail.age = 'hari'

console.log(detail.age);

// console.log('address' in person);
// console.log(typeof person.age);


// console.log(Object.values(person))
// console.log(Object.keys(person))


// console.log(Object.entries(person))