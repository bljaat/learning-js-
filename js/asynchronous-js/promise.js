//every promise has three states.
//1. pending, 2 fullfilled,  3 reject

//API : application programming interface

//promise creating------

// let promise = new Promise((resolve, reject) => {

//     setTimeout(() => {
//         console.log("async task is completed ")
//         resolve()
//     }, 2000)
// })



// promise CONSUMPTIN------
// promise.then(() =>{
//     console.log('promise one has been completed')
// })



//2. Promise Two

//  new promise((resolve, reject) => {

//     setTimeout(() => {
//         console.log("your task has been completed")
//         resolve()
//     }, 2000)

// }).then(() => {
//   console.log("prosmie two has been completed")
// })


// Prpmise Three
 
let promiseThree = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve({name: "bhanwar", email: "bhanwarlal@gmail.com"})
    }, 1000)
})


// promiseThree.then((data) => {
//   console.log(data)
// })



// Promise Four

let promiseFour = new Promise((resolve, reject) => {
    setTimeout(() => {
        let loggedIn = true;
        if(loggedIn === true){
            resolve({name: "roshan", email: "roshan@gmail.com"})
        }else{
            reject({message: "your password is wrong!"})
        }
    }, 3000);
})


// consuming promise with chaining

// promiseFour
// .then((data) => {
//    console.log(data)
// })
// .catch((error) => {
//    console.log(error.message)
// })
// .finally(() => {
//    console.log("finally your promise either resolve or rejected")
// })


//OR
//consuming promise with async await
let promiseFive = new Promise((resolve, reject) => {

    setTimeout(() => {
        let loggedIn = true;
        if(loggedIn === false){
           resolve({username: "bhanwar lal", email: "bhanwar@gmail.com"})
        } else {
            reject({message: "your password is wrong!"})
        }
        
    }, 2000);
})


async function promiseWithAsync(){
   try{ 
      let result = await promiseFive
      console.log(result)

   }catch(error){
      
      console.log(error)
   }
}


promiseWithAsync()