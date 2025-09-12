// Api = Application programe  interface

let div = document.querySelector(".data");
div.style.background = "#fff";

let button = document.querySelector("button")

button.addEventListener("click", () => {

    div.style.backgroundColor = "#f1f1f1";

    fetch("https://randomuser.me/api")
        .then((response) => {
            return response.json();
        })
        .then((response) => {
            fetchData(response.results[0]);
        })
})


function fetchData(data) {
    console.log(data)



    div.innerHTML = "";

    let h2 = document.createElement("h2");
    h2.innerHTML = data.name.first + " " + data.name.last;

    let image = document.createElement("img");
    image.style.borderRadius = "100px";
    image.style.width = "100px";
    image.style.height = "100px";
    image.setAttribute("src", data.picture.large);



    let p = document.createElement("p");
    p.innerHTML = data.email;


    let phone = document.createElement("p");
    phone.innerHTML = data.phone;


    let gender = document.createElement("p");
    gender.innerHTML = data.gender;

    div.appendChild(image);
    div.appendChild(h2);
    div.appendChild(p);
    div.appendChild(phone);
    div.appendChild(gender);

}