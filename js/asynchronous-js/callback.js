//what is a callback?
// A callback is a function passed as an argument to another function.


//Why use callbacks?
// to handle asynchronous operations, like:

//API REQUEST
//reading files
//timers (setTimeout, setInterval)




// basic callback 
function name(name, callback){
    console.log(`hello ${name}, welcome to our website`)

    callback()
}

function goodBye(){
    console.log("good bye ")
}


name("bhanwar lal", goodBye)






function sum(a, b, callback){
    console.log(`your sum is ${a + b}`)

    callback()
}


function done(){
    console.log('your task has been completed')
}

sum(10, 10, done)