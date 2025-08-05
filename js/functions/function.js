//types of funcitons
//A. function declartion, B. function expression, arrow function or anonyms function

// A. function declarion
//fucntion creation 

function profile(){
    let fName = "bhanwar lal"
    let lName = "jaat"

    console.log(fName, lName, "welcome to over website")
}

profile();










//a function with two parameters

 greet2("sween", "khan")
function greet2(a, b){
    console.log( a, b, "welcome to our website")
}




//B. function expression
 
let greet  = function (){
    console.log("welcome to our website")
}

greet()




//C. Arrow function 
// callback

let greet1 = () =>{
     console.log("lokesh : welcome to our website")
}

greet1()




function add(a, b){
    console.log(a+ b)
}

add(4,6)


function remove(a, b){
    console.log(a - b)
}

remove(10, 4)


function mualtiplay(a, b){
    console.log(a* b)
}

mualtiplay(2, 9)

function div(a, b){
    console.log(a/ b)
}

div(10, 2)