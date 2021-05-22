const mongosse = require('mongoose');
const clientsshema = new mongosse.Schema ({
    cin: String,
    firstname: String,
   lastname: String,
   tel: Number, 
   cbe:Number,
   email:String,
   password:String
})
let client = mongosse.model('clients',clientsshema,'taxi')
module.exports= client;