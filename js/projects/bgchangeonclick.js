

let button = document.querySelectorAll("button")

// console.log(button)


button.forEach((btns) => {
      btns.addEventListener("click", () =>{ 
        // console.log(btns.innerText)
          document.body.style.backgroundColor = btns.innerText
      })
})