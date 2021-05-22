const mongosse = require('mongoose');
const driversschema = new mongosse.Schema ({
   cin: String,
    firstname: String,
   lastname: String,
   tel: Number, 
   car: String,
   matricule: String,
   IBAN: Number,
   email:String,
   password:String
})
let drivers= mongosse.model('drivers',driversschema,'taxi')
module.exports= drivers;