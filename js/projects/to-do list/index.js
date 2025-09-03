let inp = document.querySelector("input")
let button = document.querySelector(".addBtn")
let ul = document.querySelector("ul")



button.addEventListener("click", (e) => {
    e.preventDefault()

    if (inp.value.trim() === "") {
        alert("please fill out of the input")
        return
    }
    


    ul.style.display = "block"
    let createLi = document.createElement("li");
    createLi.innerHTML = inp.value + "<span><button class='deleteButton'>Delete</button> <button class='doneButton'>Done</button></span>";

    ul.appendChild(createLi)

    let deleteButton = createLi.firstElementChild.firstElementChild;

    deleteButton.addEventListener("click", () => {
        createLi.remove()

        if (ul.firstElementChild === null) {
            ul.style.display = "none"
        }
    })



    // done button
    
    let doneButton = createLi.firstElementChild.lastElementChild;
    doneButton.addEventListener("click" , () => {
        console.log("working")
        createLi.style.opacity = (createLi.style.opacity === "0.5") ? "1" : "0.5"
    }) 
    console.log(createLi.firstElementChild.lastElementChild)
    inp.value = ""
})