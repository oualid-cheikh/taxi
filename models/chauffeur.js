const mongosse = require('mongoose');
const chauffeurschema = new mongosse.Schema ({
    _id: Number,
    numeroCin: String,
    nom: String,
   prenom: String,
   tel: Number, 
   voiture: String,
   matricule: String,
   login:String,
   password:String
})
let chauffeur= mongosse.model('chauffeur',chauffeurschema,'taxi')
module.exports= chauffeur;