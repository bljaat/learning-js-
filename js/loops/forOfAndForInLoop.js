let studentsName = ["bhanwar lal", "lokesh", "roshan", "mohan", "amit", "ravi", "anil", "sohan", "ashok"];


// for of loop


//     variable name will give you all the values from the array
//     it will work for an array


// for(let student of studentsName){
//     console.log("Hello", student)
// }




//      for in loop
//      it will work only for an object



let profile = {
    name: "bhanwar lal",
   age: 18,
   married: false,
   contactNO: 9929290123,
   address: "jaipur"
}

// console.log(profile.name)         
// console.log(profile["name"])     


for(let key in profile){

    console.log(key + " " + profile[key])
}
