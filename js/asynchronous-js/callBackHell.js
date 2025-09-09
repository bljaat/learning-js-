function login(callback){
     setTimeout(() => {
        console.log("user has loged in")
        callback()
    })
}


function fetch(callback){
    setTimeout(() => {
        console.log("data is fetched")
        callback()
    }, 1000)
}


function updateUi(callback){
    setTimeout(() =>{
        console.log("ui updatesd")
        callback();
    }, 1000)
}


function sendEmail(callback){
    setTimeout(() => {
        console.log("email has been send")
        callback()
    }, 1000)
}


// callback hell

login(() => {
    fetch(() => {
        updateUi(() => {
            sendEmail(() => {
                console.log("The task is completed")
            })
        })
    })
})