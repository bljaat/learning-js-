let name = {
    firstName: "bhanwar lal",
    lastName: "jaat",

    fulName: function(){
        return this.firstName+ " " + this.lastName
    },




    intro: function (city, state) {
        return `Hello ${this.firstName} ${this.lastName} from${city} ${state}`

    },

    workingExpp: function(data) {
        return data
    }
}

// console.log(name.intro("jaipur", "rajasthan"))





//call : method. its like borrowing from other
let name2 = {
    firstName: "lokesh",
    lastName: "kumar"
}

console.log(name.fulName.call(name2))
console.log(name.intro.call(name2, "jaipur" , "rajasthan"))










//APPLY: if you want to pass multiple arguments it hould be an array
let name3 = {
    firstName: "roshan",
    lastName: "choudhary"
}

console.log(name.intro.apply(name3,["gurgaon", "delhi"]))



//BIND: method . it will bind your method and later on you can use it where you want 

let name4 = {
    firstName: "ravi",
    lastName: "kumar"
}

let method = name.fulName.bind(name4)

console.log(method())





// keeping method outside of the array 

let printFullName = function(){
    console.log(this.firstName, this.lastName)
}

let profile = {
    firstName: "rohit",
    lastName: "kumar"
}


let profile2 = {
    firstName: "rakesh",
    lastName: "sharma"
}
printFullName.call(profile)
printFullName.call(profile2)



