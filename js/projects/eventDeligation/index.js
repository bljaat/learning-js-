

let parent = document.querySelector(".parent")

parent.addEventListener("click", (e) => {
    if (e.target.tagName === "LI") {
        console.log(e.target.textContent)
    }
})
