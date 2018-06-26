var allRides=[
    {
        id:1,
        name:"Darot",
        from: "Mushin",
        to:"Lagos",
        time: 16/4/2018    

    },
    {
        id:2,
        name:"Darot",
        from: "Mushin",
        to:"Lagos",
        time: 16/4/2018    

    },
    {
        id:3,
        name:"Darot",
        from: "Mushin",
        to:"Lagos",
        time: 16/4/2018    

    },
   
]


var express = require('express');
var app = express();
var path = require('path');
var bodyParser = require('body-parser');
var fs = require('fs');

var data = fs.readFileSync('data.json');
var rideArray = JSON.parse(data);
var serveStatic = require('serve-static');

var jsonParser = bodyParser.json()

var urlencodedParser = bodyParser.urlencoded({ extended: false })


app.use('/api/v1', serveStatic(path.join(__dirname, 'views')))


app.post('/api/v1/Registration', urlencodedParser, postRegistration=(req, res)=>{
    var bodyF = req.body
    var password = req.body.password
    var rpassword = req.body.repeat_password
    if(password === rpassword){
        console.log("its ok")
    }
    else{
        console.log("password does not match")
    }
    const saved =(err)=>console.log("ok")
    fs.writeFile('data.json', JSON.stringify(bodyF, null, 2), saved)
    allRides.push(bodyF)    
    res.send(bodyF)
    console.log(allRides)
});

app.get('/api/v1/rides', getRideOffers=(req, res)=>{
    res.send(allRides)
});

app.get('/api/v1/rides/:id', getRideOffers=(req, res)=>{
    let ids = req.params.id
    for(var i =0; i<allRides.length; i++){
        if(allRides[i].id == ids){
            res.send(allRides[i])
        }
    }
});

app.post('/api/v1/rides', urlencodedParser, postRideOffers=(req, res)=>{
    var rideOffer = req.body

    res.send(rideOffer)

});
app.post('/api/v1/rides/:id/:requests',  postRideOffers=(req, res)=>{
    let request={
        id:req.params.id,
        action:req.params.requests
    }
    var reply={
        message :"thank you"
    }

    res.send(reply)
   
    console.log("Thank you")

});

const port = process.env.PORT || 8080;
app.listen(port, () => {
    console.log("Way to go server at port " + port);
});

console.log("Way to go server!")



