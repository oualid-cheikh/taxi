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
//admin=mongoose.model('admin',adminschema);
        
//module.exports={
   // createData:function(inputData, callback){
                 
    //   admin= new admin(inputData);
    //   admin.save(function(err, data){
     //    if (err) throw err;
    //      return callback(data);
   //    });
   // }
//}