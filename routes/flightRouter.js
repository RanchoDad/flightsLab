
// this is to see the index
// app.get('/flights/:id', 'some-function-defined-in-the-controller.index')
// 
// app.get('/new', 'some-function-defined-in-the-controller.new')
// this is the show route
// app.get('/:index', 'some-function-defined-in-the-controller.show-which-should-be-defined-in-controller')
// create a new route, is that something users should be able to do?

const app = require('express').Router();
const flightController = require("../controller/flightController");


app.get("/", flightController.index)

module.exports = app; 