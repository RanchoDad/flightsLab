const express = require('express')
// import express from 'express'
const app = express()
require('dotenv').config();
const mongoose = require('mongoose');
require('./config/flightsDatabase')


app.set('view engine', 'ejs')

const flightController = require('./controller/flightController')



app.use(express.urlencoded({ extended: false }));

app.listen('3000', ()=>{
    console.log("express is running...")
})

