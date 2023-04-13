const express = require('express')
// import express from 'express'
const app = express()
require('dotenv').config();
const mongoose = require('mongoose');
require('./config/flightsDatabase')
const flightController = require('./controller/flightController');
const Flight = require('./models/flightModel');

//set up view
app.set('view engine', 'ejs')

//set up routes


  app.get("/flight/:index", (req, res) => {
    const flightId = Flight[req.params.index];
    res.render("shows", { flightId });
  });
  


app.use(express.urlencoded({ extended: false }));
//server is listening
app.listen('3000', ()=>{
    console.log("express is running...")
})

