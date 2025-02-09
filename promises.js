// promise in js 
//Asyncronous programing 

// what is promise in js 
// set timeout 

// Syntax

// setTimeout(callback, setInterval,para .....);

// console.log('start');
// setTimeout((name, age)=>{
//     console.log(name,age);
// }, 2000, 'John', 20);

// clearTimeout(timerId); //delete 

// console.log('end');

// let x = 10;
// const timerId1 = setInterval (()=>{
//     x--;
//     console.log(x);
//     if(x === 0){
//         clearInterval(timerId1);
//     }
// },1000);

// const promise = new Promise((resolve, reject) => setTimeout(()=>{
//     console.log('data fetching')
//     resolve('data loaded')
// },2000))

// promise.then((data) => console.log(data))
// .catch((err) => console.log('error occured: ',err))

const fetchData = (id) => {
    loading = true
    return new Promise((resolve,reject) =>setTimeout(()=>{
        if(id){
            resolve(`Data loaded with ${id}`);
        } else {
            reject('Id is required')
        }
    },2000))
}

// fetchData(1).then((data)=> {
//     isLoading = false
//     console.log('then',data)
// })
// .catch((err)=> console.log('err',err))
// .finally(()=> console.log('finally'));

// async function

async function getData () {
    try {
        const response = fetchData(1)
        console.log(response)

    } catch (error) {
        console.log('err',error)
    } finally {
        console.log('finally')
    }
}

getData()

// task jsonplaceholder

