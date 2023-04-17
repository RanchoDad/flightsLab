require('dotenv').config()
const express = require('express')
const app = express()
const logger = require('morgan')
const methodOverride = require('method-override')

const mongoose = require('mongoose');
require('./config/flightsDatabase')
const flightController = require('./controller/flightsController');
const Flight = require('./models/flightModel');
const flightRouter = require('./routes/flightRouter')

//set up view
app.set('view engine', 'ejs')

// MIDDLEWARE SECTION
// Console.logs useful stuff about incoming requests
app.use(logger('dev'));
// Transforms request methods when we want to
app.use(methodOverride('_method'))
// Gives us form data as req.body
app.use(express.urlencoded({ extended: false }));



//set up routes
app.use('/', flightRouter)
  


app.use(express.urlencoded({ extended: false }));
//server is listening
app.listen('3000', ()=>{
    console.log("express is running...")
})

