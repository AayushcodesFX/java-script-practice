// arrays in js
// const person1= "ram";
// const person2= "shyam";
// const person3= "hari";

// const persons = ["shyam"," ram", "hari"];
// const numbers = [1,2,3,4] // more usage

// // const arr = new Array() //use less 

// console.log(numbers.length);

// // console.log(arr.length);

// numbers[0] = 1;

// console.log(numbers.length);
// console.log(numbers);

// console.log(numbers.indexOf(1));

// numbers[2] = 5 // can change the data inside the array;

// // numbers.push(10) //add to the end 

// console.log(numbers.indexOf(1));
// numbers.pop() // delete from end and return 

// const element = numbers[2];

// console.log(numbers) 

// console.log('element is : element : ', element);

// const numbers = [1,2,3,4];

// const newel = 10;
// numbers[2] = newel;
// const element = numbers.shift() // delete from start and return
// unshift // add to start 

// console.log(numbers);
// console.log( 'element is : ', element);

// delete numbers [0] //there is a bug 

// console.log(numbers)

// practice

// const info = [1,5,7,9,10]
// console.log(info.length);

// // now lets try to add number 14
// console.log(info.push(14));
// console.log(info);

// ///now lets try removing the 0 index inside info

// console.log(info.shift(0));
// console.log(info);

// //now adding another number in the 0 index 

// console.log(info.unshift(12));
// console.log(info);


//map 
// const numbers = [1,2,3,4];
// const newArr = numbers.map ((el,i) => el *2) 
// // console.log(numbers);
// // console.log(newArr); 

// //foreach
// numbers.forEach((el,i) => console.log('the element is :', el))
// console.log(numbers)

// console.log(newArr);

// //filter

// // const isGtThn3 = numbers.some((el,i) => el > 4)
// // console.log(isGtThn3);

// const iseveryGtThan3 = numbers.every((el,i) => el > 5);
// console.log(iseveryGtThan3);

// const filteredArr = numbers.filter((el,i) => i !== 2)

// console.log(numbers)
// console.log(filteredArr);

// const numbers = [100,20,30,4,1];

// numbers.sort()
// console.log(numbers.sort((a,b) => a-b)); // a-b accending and b-a decending

const persons = [
    {
        name: 'aayush',
        age:20,
        isStudent: false,
    
    },
    {
        name:'shyam',
        age:21,
        isStudent: false,
    }
]

persons.sort((a,b)=> ((a.name).localeCompare)(b.name) || a.age -b.age);

console.log(persons)