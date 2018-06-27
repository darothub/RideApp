const express = require('express');
const app = express();
const PORT = process.env.PORT || 8080;

app.get('/', (req, res)=> res.send('Hello World!'));

const run=()=> console.log("way to go server!")
app.listen(PORT, run)
