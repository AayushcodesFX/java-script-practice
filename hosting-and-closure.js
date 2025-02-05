// hosting 

// console.log(x);

// var x = 1; // memory creation 

// console.log(x); // execution phase.

// memory creation and execution phase. 

// function  greet () {
//     console.log('hello world');
// }
// console.log(greet);

// let hosting 

// let x = 10;
// console.log(x);

// console.log(y);
// const y = 10; //TDZ from line 1 - 22

// closures

// just like lexical scope // function bundled with lexical scope 

// function outer() {
//     var x = 1;
//     function inner(){
//         console.log(x);
//     }
//     inner();
// }
// outer();

// function outer () {
//     var x = 1;
//     return function inner() {
//         console.log(x);
//     }
// }
// const func = outer ()
// func()

// function outer () {
//     var y = 1;
//     return function inner () {
//         console.log(y);
//     }
//     y = 20;
//     inner();
// }
// const func = outer()
// func();

// function outer (a) {
//     function inner(b) {
//         console.log(a*b);
//     }
//     inner(9);
// } 
// outer(8)

// function factor(f) {
//     return function mult (num) {
//         console.log(num * f)
//     }
// }
// const double = factor(2);
// const tripple = factor(3);

// double(20);
// tripple(30);

// function counter () {
//     let count = 0;

//     return function increment (){
//         count ++
//         console.log(count);
//     }
// } //private. 

// const incrementCount = counter();
// incrementCount();

// function counter () {
//     let count = 0;

//     return {
//         increment: () => {
//             count ++
//             console.log(count);
//         },
//         decrement: () => {
//             count --
//         },
//         getCount: () => {
//             console.log(count);
//         }
//     }
// }

// const count = counter()
// count.increment()
// count.decrement()
// count.getCount()

// function add (num) {
//     let cache = {}

//     return function inner (num) {
//         if(num in cache) {
//             console.log('Log from cache', cache[num])
//         } else {
//             console.log('computing');
//             cache[num] = num + 10;
//             console.log(cache[num]);
//         }
//     }
// }

// const func = add();
// func (10);
// const func2 = add(10);
// func(10);

//create a closure (account) function blc 3 to 4 withdraw deposit and check balance; 

function account(initialBlc) {
    let balance = initialBlc; 

    return {
        deposit: function(amount) {
            if (amount > 0) {
                balance += amount;
                console.log(`deposited: Rs ${amount}`);
            } else {
                console.log("Invalid deposited amount");
            }
        },
        withdraw: function(amount){
            if (amount > 0 && amount <= balance){
                balance -= amount;
                console.log(`withdrawn Rs ${amount}`);
            } else {
                console.log("Insufficient balance or invalid amount");
            }
        },
        checkBalance: function(){
            console.log(`current balance Rs ${balance}`);
        }
    };
}
const myAccount = account(10000); //initial balance

myAccount.checkBalance(); 
myAccount.deposit(50000);
myAccount.withdraw(30000);
myAccount.checkBalance();
myAccount.withdraw(20000);