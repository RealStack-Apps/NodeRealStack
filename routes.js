'use strict';

const router = require('express').Router(); 
const rankRouter = require('./rank/router');
const covidRouter = require('./covid/router');

// wire up routing and export the module 
router.use('/rank', rankRouter); 
router.use('/covid', covidRouter); 


