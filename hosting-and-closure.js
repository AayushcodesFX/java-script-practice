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

function factor(f) {
    function mult (num) {
        console.log(num * f)
    }
    mult(6)
}
factor(5);
