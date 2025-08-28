





let contain = document.querySelector(".container")
let btn = document.querySelector("button")



setTimeout(() => {
    contain.style.display = "block"
}, 2000)




btn.addEventListener("click", () => {
    contain.style.display = "none"
})



let startButton = document.querySelector(".start")
let stopButton = document.querySelector(".stop")
let ristartButton = document.querySelector(".ristart")
let result = document.querySelector(".result")


let timer = 0
let interval

startButton.addEventListener("click", () => {
    interval = setInterval(() => {                       // set interval
        timer++
        result.innerHTML = timer

    }, 1000)
})


stopButton.addEventListener("click", () => {
    clearInterval(interval)
})


ristartButton.addEventListener("click", () => {
    timer = 0;
    result.innerHTML = timer
})