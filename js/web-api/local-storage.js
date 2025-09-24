// Local Storage



localStorage.setItem("username", "bhanwar lal")
localStorage.setItem("age", 18)

console.log(localStorage.getItem("username"))

localStorage.removeItem("age")

// localStorage.clear()



sessionStorage.setItem("mobile", 9929290146)




let profile = {
    name: "mohan",
    age: 26,
    email: "mohan@email.com"
}





localStorage.setItem("userProfile", JSON.stringify(profile))


let stringToLocal = localStorage.getItem("userProfile") 
console.log(JSON.parse(stringToLocal))






sessionStorage.setItem("mobile", 9929290146)