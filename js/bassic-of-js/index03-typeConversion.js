let name = "bhanwar lal";
let age = "18";
let lastname = "abcd"
let mobileNo = 9929290146;

console.log(typeof age);

let stringToNum = Number(age);               // string to number conversion
let stringToNum2 = Number(lastname);         

// console.log(typeof stringToNum);          //  number

console.log(typeof stringToNum2);            //  datatype: number;    // output NAN  



//number to string

let numToString = String(mobileNo);

// console.log(numToString)                  //  9929290146
console.log(typeof numToString)              // string



//boolean to number conversion
let booleanToNum = Number(true);             // 1            note:  if false = 0 And true = 1
let booleanToNum1 = Number(false);           // 0            



//parseInt and parseFLoat
let number = 234566.32;

// console.log( parseInt(number))           //This will not give you the value with decimal point
// console.log( parseFloat(number))         //it will give you value with decimal point


