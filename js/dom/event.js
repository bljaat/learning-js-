//What is an Event in javaScript?
//An event is an action that happens in the borwser that javascript can respond to.
//example : a user click a button,   a user type in an input field , a web page loads, a user moves the mouse

let btn = document.querySelector(".click")
let button = document.querySelector(".onmouseover")
let out = document.querySelector(".onmouseout")

// vents in js



// onclick
btn.onclick = ()=> {
     alert("hello")
}


// onmouseover
button.onmouseover = () => {
    alert("hello roshan")
}

// onmouseout
out.onmouseout = () => {
    alert("hello roshan")
}

// onkeydown
// onload
// onchange



// btn.addEventListener("click",  greet)

// function greet(){
//     alert("Hello roshan welcome to over website")
// }



btn.addEventListener("click",  () => {
    console.log("hello roshan lokesh banwar")
    alert("welcome to our website")
})

