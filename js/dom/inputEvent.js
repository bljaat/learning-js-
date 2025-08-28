let inputName = document.querySelector("[type='text']")
// let inputAge = document.querySelector("[type='number']")
let button = document.querySelector(".button")

// inputName.addEventListener("keypress", (e) => {
//     console.log(e.key)
// })



// inputName.addEventListener("keydown", (e) => {
//     console.log(e.key)
// })




// inputName.addEventListener("keyup", (e) => {
//     console.log(e.key)
// })


button.addEventListener("click" , (e) => {
    e.preventDefault()
    console.log(inputName.value)
})