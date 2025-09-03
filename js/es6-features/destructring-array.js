let profile = {
    name: "bhanwar lal",
    age: "18",
    mobile: 9929290146,
    courseName: "full stack developer",
    courseDuration: "5 months"
}


// console.log(profile.mobile)
// console.log(profile.name)



//----------------------------------OBJECT DESTRUCTERING-----------------------------------
// let { name, age,courseDuration, mobile} = profile

// console.log(age)


let { name, age, mobile, courseName: coursePurchasedName, courseDuration } = profile

// console.log(coursePurchasedName)






//   ARRAY DESTRUCTERING                      

let frutesName = ["bhanwar lal", "lokesh", "kailash", "rakesh", "rohit"]
console.log(frutesName[2])



let [first, second, ,, fifth] = frutesName 

console.log(first, second, fifth)