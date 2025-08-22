let prvButton = document.querySelector(".prev")
let nextButton = document.querySelector(".next")
let image = document.querySelector(".image")
let img = document.querySelectorAll("img")
console.log(img)
let leftPx = 0






nextButton.addEventListener("click" , () => {
    // console.log( leftPx , "hello")
    // leftPx += 500 
    // image.style.left = "-" + leftPx + "px"

    if(leftPx === (img.length - 1) * 500){
        image.style.left = "-" + leftPx + "px"
         alert("this was the last image")

    }else {
        leftPx += 500
        image.style.left =  "-" + leftPx + "px"
    }
})


prvButton.addEventListener("click" , () => {

   if(leftPx === 0){
        alert("this is the first image")
        image.style.left =  "-" + leftPx + "px"
    }else {
        leftPx -= 500
        image.style.left =  "-" + leftPx + "px"
    }

})