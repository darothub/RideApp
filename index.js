var express = require('express');
var app = express();
var path = require('path');
var bodyParser = require('body-parser');
var fs = require('fs');
var data = fs.readFileSync('data.json');
var rideArray = JSON.parse(data);
var serveStatic = require('serve-static');


app.use('/api/v1', serveStatic(path.join(__dirname, 'views')))

app.get('/api/v1/rides', getRideOffers=(req, res)=>{
    res.send(rideArray)
});

app.get('/api/v1/rides/:id', getRideOffers=(req, res)=>{
    let id = req.params.id
    res.send("Here are ride offers for " + id)
});






const port = process.env.PORT || 8080;
app.listen(port, () => {
    console.log("Server listening on port " + port);
});

console.log("Way to go server!")



