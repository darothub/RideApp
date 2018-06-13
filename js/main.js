const user = document.getElementById("user");
const password = document.getElementById("password")
var attempt = 3

const validate=()=>{
    if(user.value !=="darot" && password.value !== "Youngster1"){
        attempt--
        alert("You have " + attempt +  " attempts to go")
    }
    
    else{
        window.open('http://127.0.0.1:5500/RideApp/rideoffer.html')
    }
    
}