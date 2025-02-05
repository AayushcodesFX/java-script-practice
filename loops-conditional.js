// doing something repeatly 

//for loop;

// for(let x = 0; x < 5; x++){
//     console.log('Iteration: ',x);
// }

//do-while loop;

// let x = 0;

// do{
//     console.log('Iteration :',x);
//     x = x + 1; // x++
// }while(x< 5);

//while
// while(x < 5){
//     console.log('iteration:', x);
//     x++;
// }


//for in loop
// let student = {
//     name: 'aayush',
//     age: 20,
//     cgpa: 9,
//     ispass: true,
// }
// for(let i in student){
//     console.log(i); 
//     (key = "key","value= ",student[key]);
// }

// //for in loop
// for(number in numbers){
//     console.log(numbers[number])
// }

//for of loop
// let person = {
//     name: 'john',
//     age:20,
// }
// for (key of person){
//     console.log(key, person[key]);
// }

// for(let val of strVar){
//     //do some work 
// }
// let str= 'aayush';
// for(let i of str){
//     console.log("i = ", i);
// }

// lets practice
 
//while loop

// let i = 0;
// while(i <= 4){
//     console.log('iteration :', i);
//     i++;
// }

//do-while loop
// let x = -1;
// while(x < 9){
//     console.log(x <= 9);
//     x++;
// }

// for in loop

// let student = {
//     name:"aayush",
//     age:20,
//     cgpa:8,
// };

// for(let i in student){
//     console.log(i);(key ="key","value = "[key]);
// }

//conditional statement

// const age = 19;

// // if(age >= 18){
// //     console.log('adult');
// // }

// if(age >= 60){
//     console.log('major');
// } 

// else {
//     console.log('minor');
// }

// else if(age <  18){
//     console.log('minor');
// }

// else{
//     console.log('else part')
// };

//switch case 

// let day = 1;

// switch(day){
//     case 1:
//         console.log('sunday');
//         break;
//     case 2:
//         console.log('monday');
//         break;
//     case 3:
//         console.log('tuesday');
//     case 4:
//         console.log('wednesday');
//         default:
//             console.log('Default case')
// }



const checkRole = (role) => {

switch (role){
    case "user": 
        console.log('you are user');
        break;
    case "admin": 
        console.log('you are admin');
        break;
    case "editor": 
        console.log('you are editor');
        break;
    default: 
        console.log('please contack support');
}}

checkRole("user");