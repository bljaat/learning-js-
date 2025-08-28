let inp = document.querySelector("input")
let button = document.querySelector("button")
let ul = document.querySelector("ul")



button.addEventListener("click", (e) => {
    e.preventDefault()

    if (inp.value.trim() === "") {
        alert("please fill out of the input")
        return
    }
    let createLi = document.createElement("li");
    createLi.innerHTML = inp.value + "<span><button>Edit</button><button>Delete</button><button>Done</button></span></li>";

    ul.appendChild(createLi)

    inp.value = ""
})