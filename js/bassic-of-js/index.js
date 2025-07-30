//data types in js

// A. 7 primitive data types 

// 1.string

let firstName = "bhanwar lal"
let lastName = "jaat"


console.log(firstName);                  //bhanwar lal
console.log(typeof (firstName));          //string


// 2.number

let age = 18;

console.log(age);                       //18
console.log(typeof (age));               //number


// 3.boolean   true & false

let married = false;

console.log(married);                   //false
console.log(typeof (married));           //boolean


// 4.BigInt

let aadharCardNumber = BigInt(4567894456789);

console.log(aadharCardNumber);          //4567894456789n
console.log(typeof (aadharCardNumber));  //BigInt


// 5.undefined

let email;

console.log(email);                     //undefined

// 6.Symbol

let name = Symbol("bhanwar lal")


console.log(name);                     //Symbol(bhanwar lal)


// 7.null


let Dob = null;

console.log(Dob)                       // null





// B. Non-Pirimitive data type 3

// 1. Array

let batch3Students = ["Bhanwar", "lokesh", "roshan", "anjali"];

console.log(batch3Students);           //(4) ['Bhanwar', 'lokesh', 'roshan', 'anjali']
console.log(typeof (batch3Students));   //


// 2. object

let student = {
    name: "Bhanwar lal",
    age: 18,
    email: "Bhanwar@email.com",
    phone: 9929290146,
}

console.log(student);
console.log(typeof (student));



// 3.function

function onclick() { }





//  operator in js

//A. Airthmetic operator in js     +,-,*,/,%

let addition = 2 + 2;   // 4
let min = 4 - 2;       // 2
let mul = 2 * 2;       // 4
let div = 6 / 3;       // 2
let remainder = 10 % 4; // 2

// console.log(remainder)



//B. comparison operator in js 

console.log(10 > 5);        //true      greater than     
console.log(10 < 5);        // false    less than 
console.log(5 == 5);        //true      doubleEqual             note: check only value
console.log("5" === 5);     //false     tripleEqual             note: check value and data types
console.log(10 != 10);      //false     notEqual  
console.log(10 != 5);       //true      notEqual


//C.  Logical operator in js

// && And operator
console.log(10 === 9 && 5 > 10);    // false   note : dono condition shai hone par true, nhai to false


// || Or operator

console.log (10 === 9 || 5 < 10);   //true     note: ek condition bhi shai ho to true