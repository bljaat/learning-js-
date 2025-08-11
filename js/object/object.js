let profile = {}   // object
let profile1 = new Object()  


let profile2 = {
    name : "bhanwar lal" 
}

// console.log(profile2)


//adding new key and value in object   ADDING

profile2.lastName = "jaat"
profile2.age = 18 

// console.log(profile2)




//updating existing value             UPDATE

profile2.lastName = "dudi"


// console.log(profile2)


// delete 

delete profile2.age
// console.log(profile2)



//access or read the value             READ
// console.log(profile2.name)             //dot notation 
// console.log(profile2["lastName"])      //square notation



//to get all the keys form an object
console.log(Object.keys(profile2))       

//to get all the values from an object
console.log(Object.values(profile2))


//to get all the keys and values in nested array format
console.log(Object.entries(profile2)) 


for(let key in profile2){
    console.log(key + " : " + profile2[key])
}



let data = [
    {name : "bhanwar lal" , age: 18 , mobNumber: 9929290146, address: "jaipur"},
    {name : "lokesh" , age: 19 , mobNumber: 9610631334, address: "jaipur"},
    {name : "roshan" , age: 18 , mobNumber: 1234567890, address: "jaipur"}
]


console.log(data[0].age)



