let names = ["bhanwar lal", "roshan", "ravi", "mohan"];

let profile =   [
    {name :"bhanwar lal",age: 18, mobile: 99292929, score: 99, rollNo: 2601287},
    {name: "lokesh", age : 19, mobile: 12345678, score: 99, rollNo:9929246},
    {name: "roshan", age: 24, mobile: 9974321, score:99, rollNo:1234567}
]

// console.log(profile[1].name)


//        MAP METHOD
//        you will get all the data from this 


let result = profile.map((profile) => {
  return profile;
});


// console.log(result)


let numbers = [1, 2, 3, 4, 5];

let doubleNumbers = numbers.map((num)  =>{
  return num * 2;
});


// console.log(doubleNumbers)


let upperNames = names.map(name => name.toUpperCase());

// console.log(upperNames); 



// FILTER METHOD


// let userRollNo = prompt("what is your roll number?")

// let filter = profile.filter((profile) => {
//    return profile.rollNo == userRollNo
// })


// console.log(filter)


let ages = [12, 17, 18, 20, 15, 22];

let adults = ages.filter((age) => {
  return age >= 18;
});

// console.log(adults); 



// REDUCE METHODE


let coins = [1, 2, 10, 5, 20, 100, 0, -4,  500, 40, 55, 66];

let reduceData = coins.reduce((acc, curr) => {
  return acc = acc + curr;
});


// console.log(reduceData);





//  SORT ARRAY
let sorting = coins.sort((a, b) =>   a - b)           //ascending format  , from small to high

// let sorting2 = coins.sort((a , b) =>   b - a )           //descending format , from high to small

 console.log(sorting)
//  console.log(sorting2)

// to make an array to a string              .join("")

let name2 = "bhanwar lal"
console.log(name2.split("").reverse().join("")) 

console.log(name2)
