
// this is to see the index
// app.get('/flights/:id', 'some-function-defined-in-the-controller.index')
// 
// app.get('/new', 'some-function-defined-in-the-controller.new')
// this is the show route
// app.get('/:index', 'some-function-defined-in-the-controller.show-which-should-be-defined-in-controller')
// create a new route, is that something users should be able to do?

const app = require('express').Router();
const flightsController = require("../controller/flightsController");


app.get("/", flightsController.index)
app.get('/new', flightsController.new)
app.get('/:id', flightsController.show)
app.post('/new', flightsController.create)
// app.post('/:id', flightsController.update)

module.exports = app; 