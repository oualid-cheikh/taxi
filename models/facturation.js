const mongosse = require('mongoose');
const facturationschema = new mongosse.Schema ({
    _id: Number,
   idclient: Number,
   idchaufeur: Number,
   tarif: Number,
  date: {type:Date, default: Date.now()}, 
   trajet: String
})
let facturation= mongosse.model('facturation',facturationschema,'taxi')
module.exports= facturation;