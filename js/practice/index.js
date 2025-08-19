let num = [100,200,300,40000,5000,6000000,700,80,900]

// let sorting = num.sort((a ,b) => b - a)
// let sorting2 = num.sort((a, b) => a - b)

// console.log(sorting2[0])



//Q1. find the biggest number from given array?--------------------------

function bigNumber(numbers){

    let bigNumber = numbers[0]

    for(let i = 0 ; i < numbers.length ; i++){
        if(numbers[i] > bigNumber){
            bigNumber = numbers[i]
        }
    }

    return   {biggestNumber: bigNumber}

}


console.log(bigNumber(num))


//Q1. find the smallest number from given array?--------------------------


function smallNumber(numbers){
 let smallNumber = numbers[0]

    for(let i = 0 ; i < numbers.length ; i++){
        if(numbers[i] < smallNumber){
            smallNumber = numbers[i]
        }
    }

    return   {smallestNumber: smallNumber}
}

console.log(smallNumber(num))



//Q2. find the word if its palindrom or not?-----------------------------------------

// function palindrom(str){

//     let reversStr = str.split("").reverse().join("") 

//     return str === reversStr
// }

function palindrom(str){
    let splitArray = str.split("")

    let reversString = ""

    for(let i = splitArray.length - 1; i >= 0; i--){
        reversString += splitArray[i]
    }
    return reversString === str

}

console.log(palindrom("ded"))


//Q3. find the number is even or odd -----------------------------------------------

function evenOrOdd(number){
   if(number % 2 === 0){
      return "Even"
   } else {
    return "Odd"
   }
}

console.log(evenOrOdd(4))


//Q4. count the number of vowels in a string.-------------------------------------


function countVowels(str){
   let string =  str.toLowerCase()

    let vowels = ["a" , "e" , "i" , "o" , "u"];
    let count = 0

    for(let i = 0 ; i < string.length ; i++){
        if(vowels.includes(string[i])){
            count++
        }

    }
    return count
}

console.log(countVowels("Education"))


//Q5. Convert a string to Title Case(first letter capitalized)--------------------------------



// function capitalFirstLetter(str){ 
//    return str.slice(0, 1).toUpperCase()  +   str.slice(1)
// }


// console.log(capitalFirstLetter("bhanwar lal"))



let name = ["bhanwar lal" , "lokesh" , "roshan" , "rohit" , "mohan" , "ravi"

    
]


function capitalFirstLetter(names){

    let nameChanged = []

    for(let name of names){
         nameChanged.push( name.substring(0, 1).toUpperCase() + name.substring(1))
    }
    return nameChanged

}

console.log(capitalFirstLetter(name))