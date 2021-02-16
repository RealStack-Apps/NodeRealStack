// 'use strict';

// // native file system
const fs = require('fs');


// // load up configuration
// const config = require('./config');

// middleware to parse objects / serialize json
const bodyParser = require('body-parser');


// load routes , passing router logic to routes.js





const express = require('express'); 

const app = express(); 
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
// app.use('/',routes);

app.get('test',(req,res) => {
    res.send('What Up Big AL - Lets build the world !')
})

app.listen('4201',() => {
console.log("server has been realSTACKED!!!!")
})