let presentTime = document.querySelector(".time")


setInterval(() => {

let time = new Date()   
presentTime.innerText = time.toLocaleTimeString()

}, 1000)