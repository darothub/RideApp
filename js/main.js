var user = document.getElementById("user");
var password = document.getElementById("password")
var attempt = 3

const validate=()=>{
        
        if(user.value =="darot" && password.value == "Youngster1"){
            window.open('http://127.0.0.1:5500/RideApp/rideoffer.html')
            return false
            
        }
        attempt--
        
        alert("You have " + attempt +  " attempts to go")
        if(attempt == 0){
            alert("please confirm your login details and try again")
            location.reload()
            return false
        }
        
    
    
    
}