let submit = document.querySelector("button")
let form = document.querySelector("form")
let name = document.querySelector(".name")
let email = document.querySelector(".email")
let mobile = document.querySelector(".mobile")
let username = document.querySelector(".username")
let password = document.querySelector(".password")



form.addEventListener("submit", (e) => {
    e.preventDefault();

    if (!name.value || !email.value || !mobile.value || !username.value || !password.value) {
        alert("please fill out the all inputs")
        return
    }

    if(String(mobile.value.length) > 10 || String(mobile.value.length) < 10){
    alert("please enter 10 digit number")
    return
  }
  console.log(name.value , email.value , mobile.value , username.value , password.value)
})