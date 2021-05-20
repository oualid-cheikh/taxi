const mongosse = require('mongoose');
const clientsshema = new mongosse.Schema ({
    idclients: Number,
    Cin: String,
    firstname: String,
   secondname: String,
   tel: Number, 
   cartebanc:Number,
   login:String,
   password:String
})
let clients = mongosse.model('clients',clientsshema,'taxi')
module.exports= clients;