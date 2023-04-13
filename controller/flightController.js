const Flight = require('../models/flightModel')

module.exports = {

    index: async (rec, res)=>{
        const flights = await Flight.find()
        res.render('flight/index',{flights: flights})
}


}