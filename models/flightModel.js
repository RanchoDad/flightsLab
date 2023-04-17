const mongoose = require('mongoose');
// optional shortcut to the mongoose.Schema class
const Schema = mongoose.Schema;
const destinationSchema = new mongoose.Schema({
  destAirport: {
    type: String,
    enum: ['SW_Southwest', 'SPRT_Spirit', 'AA_American', 'UA_United'],
    required: true
  },
  arrival: {
      type: Date,
      required: true
  }
})
const flightSchema = new Schema({
    airline: {type: String,
      enum: ['SW_Southwest', 'SPRT_Spirit', 'AA_American', 'UA_United'],
      required: true
    },
    airport: {type: String, 
      enum: ['PHX_Phoenix', 'OAK_Oakland', 'PHL_Philadelphia', 'EWR_Newark'],
      required: true},
    flightNo: {type: Number, required: true},
    departs: {type: Date, required: true},
    destinations: [destinationSchema]
  });

const Flight = mongoose.model('Flight', flightSchema);
  module.exports = Flight;