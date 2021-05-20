const mongosse = require('mongoose');
const tripsschema = new mongosse.Schema ({
    idtrips: Number,
    iddrivers: Number,
    idclients: Number,
    starting_point: String,
    final_destination: String,
    tariff: Number
})
let trips= mongosse.model('trips',tripsschema,'taxi')
module.exports= trips;