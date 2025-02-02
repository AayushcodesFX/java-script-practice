// // {} object literals - template literals

const person = {
    name: "aayush",
    age: 30, 
    greet: function (){
        console.log(`${this.name} is ${this.age} years old.`);
    }
}

// // console.log(person.name); //console.log(oerson["name"]) // 2 types to acess 

// console.log(person.greet());

// const person = new Object(); //by using constructure - secondary option;
// person.name = "Aayush";
// person.age = 20;

// console.log(person.name);

