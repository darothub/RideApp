const express = require('express');
const app = express();
const PORT = process.env.PORT || 8080;

app.use('/', (req, res)=> res.send('Hello World!'));

const run=()=> console.log("way to go server!");
app.listen(PORT, run);

module.exports = app;
