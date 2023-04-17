const Flight = require("../models/flightModel");

const flightsController = {
  index: async (rec, res) => {
    const flights = await Flight.find();
    res.render("index", { flights: flights });
  },
  new: (req, res) => {
    res.render('new')
  },
  create: async (req, res) => {
    try{
      const newFlight = await Flight.create(req.body)
      console.log(newFlight)
      res.redirect(`/${newFlight._id}`)
    }catch(err){
      console.log(err);
      res.send(err);
    }
  },
  show: async (req, res) => {
    const flight = await Flight.findById(req.params.id)
    console.log(flight)
    res.render('show', {
      flight: flight
    })
  }
  // update: async (req, res) => {
  //   try{
  //     const updatedFlight = await Flight.findByIdAndUpdate(req.params.id, req.body);
  //     res.redirect(`/${req.params.id}`)
  //     console.log (updatedFlight)
  //   }catch(err){
  //     res.send(err)
  //   }
  // }
};

module.exports = flightsController 
