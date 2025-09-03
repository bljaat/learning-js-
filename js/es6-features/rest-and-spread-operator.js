let profile = {
    name: "bhanwar lal",
    age: "18",
    mobile: 9929290146,
    courseName: "full stack developer",
    courseDuration: "5 months"
}

let profile2 = profile                   

profile2.name = "bhanwar lal jaat"


console.log(profile2.name)


// SPREAD OPERATOR

let profile3 = {...profile}
profile3.name = "ram"



// console.log(profile3)





let profile4 = {...profile, email: "bhanwar@gmail.com", address: "jaipur"}      



// console.log(profile4)




// add two object data in one object with help of spread operator
let jobProfile= {firstJob:  "junior web developer",secondJoB:  "web developer"}




let fullProfile = {...profile, ...jobProfile} 


console.log(fullProfile)






//----------------------------------------------REST PARAMETER --------------------------------

function printNames( ...name){
  console.log(name)

}


printNames("bhanwar lal", "lokesh", "ravi", "roshan")