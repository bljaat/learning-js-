// EVENT BUBBLING =  It is the default behaviour of every event in js
// it means your event will start from child to parent


let par = document.querySelector(".parent")
let child = document.querySelector(".child")


// par.addEventListener("click" , (e) => {
//     console.log("parents")
// })

// child.addEventListener("click" , (e) => {
//     console.log("child")
// })






// Event Capturning

// par.addEventListener("click", (e) => {
//        console.log("parent")
// }, true)


// child.addEventListener("click", (e) => { 
//       console.log("child")
// })


//Stop Propgation


par.addEventListener("click" , (e) => {
    console.log("you clicked on parent")
})

child.addEventListener("click", (e) => {
    e.stopPropagation()
    console.log("you clicked on child")
})

