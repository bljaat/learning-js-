// switch statement

let day = "monday";

switch(day){

    case "monday":
        console.log("Today is  Monday it's Working Day")
        break;
    
    case "tuesday":
        console.log("Today is Tuesday")
        break;
    case "wednesday":
        console.log("Today is wednesday")
        break;
    case "thrusday":
        console.log("Today is Thrusday")
        break;
    case "friday":
        console.log("Today is Friday")
        break;
    case "Saturday":
        console.log("Today is Saturday")
        break;
    case "sunday":
        console.log("Today is Holiday")
        break;

    default:
        console.log("Please Enter a Valid Day Name")
}


let Name = prompt("What is Your Name");

switch(Name){
    case "roshan":
        alert("Name = Roshan Choudhary,  age = 24,   MOB.number = 123456890 , Address = jaipur")
        break;
    case "bhanwar lal":
        alert("Name = Bhanwar lal , age = 18 , MOB.number = 0987654321, Address = jaipur")
        break;
    case "lokesh":
        alert("Name = Lokesh , age = 18 , MOB.number = 0987654321, Address = jaipur")
        break;
    default:
        alert("This Name is not defain");
}