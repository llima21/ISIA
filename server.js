const express = require("express");
const path = require('path');
const mysql = require('mysql');
const bodyParser = require('body-parser');
const connectionDetails = require('./config/mysql-connection');
const moloniRouter = require('./backend/moloni.js');


var app = express();
const hostname = '127.0.0.1';
const port = 8080;

app.use(express.static(path.join(__dirname, 'App')));

app.get("/", function(req, res){
    res.sendFile(path.join(__dirname, 'App', 'Index.html'));
});
app.get("/Viagem.html", function(req, res){
    res.sendFile(path.join(__dirname, "App", "Viagem.html"));
});
app.listen(port, function(){
    console.log(`Server running at http://${hostname}:${port}/`);
});