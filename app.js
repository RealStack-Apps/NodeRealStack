'use strict'; 

// native file system 
const fs = require('fs');

// api 
const express = require('express');
const app = express();

// load up configuration 
const config = require('./config'); 
// middleware to parse objects / serialize json 
const bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// load routes , passing router logic to routes.js
app.use('/',routes);

// start api server
const server = app.listen(4201, () => {
    console.log('listening on port %s...', server.address().port);
});
