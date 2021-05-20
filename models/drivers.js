const mongosse = require('mongoose');
const driversschema = new mongosse.Schema ({
    iddrivers: Number,
   Cin: String,
    firstname: String,
   secondname: String,
   tel: Number, 
   car: String,
   matricule: String,
   IBAN: Number,
   login:String,
   password:String
})
let drivers= mongosse.model('drivers',driversschema,'taxi')
module.exports= drivers;