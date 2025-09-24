let form = document.querySelector("form")

let username = document.querySelector(".username")
let password = document.querySelector(".password")

form.addEventListener("submit", (e) => {
        e.preventDefault();

        let data = {username: username.value , password: password.value}

        let userProfile = localStorage.getItem("user")

        let userData = JSON.parse(userProfile)

        if(userData.username === username.value && userData.password === password.value){
            alert("you have successfully logged in")
            localStorage.setItem("username", userData.username)
         }else{
            alert("wrong usernae or password")
         }


        // fetch('https://68ca39ea430c4476c3489c13.mockapi.io/api/user', {
        //     method: "GET",
        //     headers: {"content-type": "application/json"},
        //     body: Json.stringify(data)
        // })
        // .then((res) =>  res.json())
        // .then((response) => {
        //     console.log(response)
        // })
})