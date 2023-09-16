const express = require('express');
const app=express();
const port = 8000;
const db = require('./config/mongoose');
const passport = require('passport');

app.use(express.urlencoded({extended: false}));

//all routes will be forwarded to routes folder
app.use('/',require('./routes'));

//server running
app.listen(port,function(err){
    if(err){
        console.log("error in creating server",err);
        return;
    }
    console.log("Server running on port "+port);
})