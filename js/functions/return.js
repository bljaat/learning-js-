// return statement in js


// basic

function add(num, num1) {
    return num + num1
}

console.log(add(10, 15))


// intermediat level

function counting(num) {
    let counting = []
    let sum = 0

    for (let i = 1; i <= num; i++) {
        counting.push(i)
        sum = sum + i
    }
    return { counting: counting, sum: sum }

}

console.log(counting(15))



// advanced level



// function evenOrOdd(num){

//     if(num % 2 === 0){
//         return num + " is even number"
//     } else {
//         return num + " is odd number"

//     }

// }


// console.log(evenOrOdd(prompt("Enter a number")))



function evenOrOdd(mobNum) {

    let number = Number(mobNum)

    // console.log(typeof number)

    if (number === 9929290146) {
        return " Hello Bhanwar lal choudhary " + "MOB.Number : " + number  
    } else if (number === 9610631334) {
        return " Hello Lokesh choudhary " + "MOB.Number : " + number 

    }else if (number === 7023308130){
        return " Hello Roshan choudhary " + "MOB.Number : " + number 
    }else{
        return "Sorry This Number is Not Defind"
    }

}


console.log(evenOrOdd(prompt("Enter a Mobile Number")))

