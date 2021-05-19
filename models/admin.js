const mongosse = require('mongoose');
const adminschema = new mongosse.Schema ({
    _id: Number,
    numeroCin: String,
    nom: String,
   prenom: String,
   tel: Number, 
   email: String,
   login:String,
   password:String
})
let admin= mongosse.model('admin',adminschema,'taxi')
module.exports= admin;