// String

let name = " bhanwar lal "
let lastName = 'jaat'
let fullName = `bhanwar lal jaat`

// method of string


console.log(name.length)                    // 11 length  
let stringTrim = name.trim()                // remove the space left and right side


console.log(stringTrim.toUpperCase())       //Converting string to uppercase
console.log(stringTrim.toLowerCase())       //Converting string to lowerCase 

console.log(fullName.charAt(4))             //looking for character 4 in fullName
console.log(fullName.indexOf("w"))          //to find the index number based on given charachter

console.log(fullName.substring(11))         // 11 number ke index ko htane ke liye
console.log(fullName.slice(1))             // 11 number ke index ko htane ke liye

console.log(fullName.replace("jaat", "dudi"))     //to replace some alphabet in string
console.log(fullName.replaceAll("a", " "))          //to replace all the given all the character

let text = "apple,banana,mango";
let result = text.split(",");
console.log(result);
console.log(fullName.split(","))             //to make an array. and it will split value from the given character
