let studentsName = ["bhanwar lal", "lokesh", "roshan", "mohan", "amit", "ravi", "anil", "sohan", "ashok"];

let message = "please deposit your fees, which is 1000 Rs."

let moneySaving = [500, 600, 700, 800, 900, 100, 200, 300, 400, 500]


console.log(studentsName[0])                     // bhanwar lal       first value from studentName array
console.log(studentsName[2] + " " + message) // roshan please deposit your fees, which is 1000 Rs.


for (let i = 0; i < studentsName.length; i++) {
    let result = studentsName[i];
    console.log(result.slice(0, 1).toUpperCase()+ result.slice(1));
}


console.log(studentsName[0])


//   for loop

// for(let variable = value ; condition ;  variable inc(++) or dec(--)){
//     console.log(variable);
// }


// for(let i = 100; i <= 200; i++){
//     console.log(i)                 //100, 101, 102, 103, 104, 105, 106, 107, 108, 109, 110, ..............
// }



//   practice for loop






// for(let i = 0; i < studentsName.length; i++){
//     let result = studentsName[i].toUpperCase() + " " + "JAAT";
//     console.log(result);
// }




for(let i = 0; i < moneySaving.length; i++){
    console.log(moneySaving[i] - 50);
}




// create table for loops

// for(i = 1; i <= 10 ; i++){
//     console.log("2" + "X" + i + "=" + 2 * i)
// }


// let table = prompt(Number("Please give a number for creating the table"))

// for(let i = 1; i <= 10; i++){
//     console.log(table +  "X" + i + "=" +(table * i))
// }



