const mongosse = require('mongoose');
const clientshema = new mongosse.Schema ({
    _id: Number,
    numeroCin: String,
    nom: String,
   prenom: String,
   tel: Number, 
   login:String,
   password:String
})
let client = mongosse.model('client',clientshema,'taxi')
module.exports= client;