let div = document.querySelector(".data");
div.style.background = "#fff";

let button = document.querySelector("button");

button.addEventListener("click", () => {
div.style.background = "#f1f1f1";

    fetch("https://randomuser.me/api/?results=5")
        .then((response) => {
            return response.json();
        })
        .then((response) => {
            div.innerHTML = "";
            response.results.forEach((user) => {
                fetchData(user);
            });

        });
});

function fetchData(data) {
    let userBox = document.createElement("div");
    userBox.style.width = "30%";
    userBox.style.border = "1px solid #ccc";
    userBox.style.padding = "15px";
    userBox.style.margin = "10px 0";
    userBox.style.borderRadius = "10px";
    userBox.style.background = "#fff";
    let h2 = document.createElement("h2");
    h2.innerHTML = data.name.first + " " + data.name.last;

    let image = document.createElement("img");
    image.style.borderRadius = "50%";
    image.style.width = "100px";
    image.style.height = "100px";
    image.setAttribute("src", data.picture.large);

    let p = document.createElement("p");
    p.innerHTML = data.email;

    let phone = document.createElement("p");
    phone.innerHTML = data.phone;

    let gender = document.createElement("p");
    gender.innerHTML = data.gender;
    gender.style.borderBottom = "solid 1px"

    userBox.appendChild(image);
    userBox.appendChild(h2);
    userBox.appendChild(p);
    userBox.appendChild(phone);
    userBox.appendChild(gender);
    div.appendChild(userBox);
}
