// function in js // objects and arrays 

// higher order functions and callsbacks in js

// const higherorder = (callback) => {
//     // const a = 10;
//     // const b = 20;
//     console.log(callback);
// }

// const greet = () => {
//     console.log('hello');
// }

// higherOrder(greet); 

const first = () => { // first function 

    const second = (a,b) => { // second function 
        console.log(a+b);
    } 
    return second;
}

const add = first();
add (1,2);


//callback 