let submit = document.querySelector("button")
let form = document.querySelector("form")
let userTag = document.querySelector("p")
let name = document.querySelector(".name")
let email = document.querySelector(".email")
let mobile = document.querySelector(".mobile")
let username = document.querySelector(".username")
let password = document.querySelector(".password")
let allInputs = document.querySelectorAll("input")


form.addEventListener("submit", (e) => {
  e.preventDefault();

  if (!name.value || !email.value || !mobile.value || !username.value || !password.value) {
    alert("please fill out the all inputs")
    return
  }

  if (String(mobile.value.length) > 10 || String(mobile.value.length) < 10) {
    alert("please enter 10 digit number")
  }
  let studentData = {
    name: name.value,
    emai: email.value,
    mobile: mobile.value,
    username: username.value,
    password: password.value
  };
  let saveData = localStorage.setItem("user", JSON.stringify(studentData))

  // console.log(saveData)


  allInputs.forEach((input) => {
    input.value = ""
  })

  // fetch("https://68ca39ea430c4476c3489c13.mockapi.io/api/user", {
  //    method: "POST",                                          
  //    headers: { "content-type": "application/json" }, 
  //    body: JSON.stringify(studentData),  
  // })
  // .then((res) => {
  //   return res.json();
  // })
  // .then((response) => {
  //   if(response){alert("your account has been successfully created")}
  //   console.log(response);
  // })
  // .catch((err) => {
  //   console.log(err)
  // })
})