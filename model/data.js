var express = require('express');


const saveData=(e)=>{
    var submit = document.getElementById('submit');
    var regform = document.getElementById('regisform');
    var userArray =[];
    let fnames = document.getElementById('fname').value;
    let lnames = document.getElementById('lname').value;
    let unames = document.getElementById('uname').value;
    let address = document.getElementById('address').value;
    let city = document.getElementById('city').value;
    let email = document.getElementById('email').value;
    let mobile = document.getElementById('phone').value;
    let password = document.getElementById('password').value;
    let rpassword = document.getElementById('rpassword').value;
    let datadate = new Date().toISOString().slice(0, 10)

    
    var data = {
        first:fnames,
        last:lnames,
        username:unames,
        address: address,
        city:city,
        email:email,
        mobile:mobile,
        password:password,
        rpassword:rpassword,
        datadate:datadate
    }
    if(password === rpassword){
        var myData = JSON.stringify(data)
    }
    else{
        alert("password does not match")
    }
    

    userArray.push(myData);
    regform.addEventListener('submit', saveData)
    e.preventDefault();
    return userArray
   
}



module.export = saveData;
