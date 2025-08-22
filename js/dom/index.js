//DOCUMENT OBJECT MODEL
// NOTE: The Document Object Model (DOM) in JavaScript is a programming interface for HTML and XML documents.
//  It represents the structure of a document as a logical tree, where each part of the document (elements, attributes, text) is represented as a node object.



//crud 

// c =  create
// r =  read
// u = update
// d = delete



// read


console.log(document.getElementsByTagName("h2")[0])   // getElementsByTagName   get the element by tagename   ,   example =  tag(<h1></h1>)



console.log(document.getElementsByClassName("title1")[0])  // getElementsByClassName   get the element by ClassName   ,  example =  ( class =   "title1")



console.log(document.getElementById("heading"))    // getElementById   get the element by Id   ,  example =  ( id =  "title1")




console.log(document.querySelector("#heading1"))    //  query select   # = id 


console.log(document.querySelector(".title1"))      // query select    . = class


console.log(document.querySelector("p"))            // query select    tag = p       first p tage



console.log(document.querySelectorAll("p")[0])      // query selecter   All      tag = p       All p tag



// update


let heading = document.querySelector("#heading2")


// heading.innerText = "hello bhanwar lal"                        //you can update text with innerText
// heading.innerHTML = "Hello bhanwar lal <span>jaat</span>"      //you can add html tag also with text
// heading.textContent                                            //you can see hidden text also



heading.style.backgroundColor = "green"
heading.style.color = "white"






// heading.classList.add("title-two")
// heading.classList.remove("title-two")
// heading.classList.replace("title2", "titleTWO")
// heading.classList.contains("titleTWO")       




// let image = document.querySelector("img")

// image.setAttribute("src", "https://images.unsplash.com/photo-1683004411999-a05a153c72d9?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDd8fHxlbnwwfHx8fHw%3D")
// //  image.removeAttribute("src")
// image.getAttribute("src")





// delete



// heading.innerHTML = ""                     //you can empty the tag 

// heading.remove()                           //you can delete tag also

// document.querySelector(".container").innerHTML = ""     //you can delter the all tags and text from container div





// create
let newELement = document.createElement("li")
newELement.innerText = "about" 

let ul = document.querySelector("ul")

ul.appendChild(newELement)                                    //adding element in ul at the last child position
//  ul.prepend(newElement)                                     //adding element in ul at the first child position

 

 
console.log(document.body.firstElementChild.lastElementChild.previousElementSibling.previousElementSibling)