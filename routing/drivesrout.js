const express=require("express");
const router=express.Router();
const MongoClient = require('mongodb').MongoClient
var ObjectID = require('mongodb').ObjectID; 
const bodyParser= require('body-parser').json
const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
//connection db 
MongoClient.connect('e.g.mongodb+srv://username:password@culster0-jtpxd.mongodb.net/admin', (err, database) => {
    var dbase = db.db("taxi");
      if (err) return console.log(err)
      app.listen(6000, () => {
        console.log('app working on 6000')
  })
})
//create driver :post
app.post('/drivers/add', (req, res, next) => {
    
  var drivers = {
    iddrivers: req.body.ObjectID,
    Cin:req.body.Cin,
     firstname: req.body.firstname,
    secondname: req.body.secondname,
    tel: req.body.tel, 
    car: req.body.car,
    matricule: req.body.matricule,
    IBAN: req.body.IBAN,
    login:req.body.login,
    password:req.body.password
  }
})
dbase.collection("drivers").save(drivers, (err, result) => {
  if(err) {
    console.log(err);
  }

  res.send('driver added successfully');
});
//read drivers : get
app.get('/drivers', (req, res) => {
  dbase.collection('drivers').find().toArray( (err, results) => {
    res.send(results)
  });
});
//Updating by ID
app.put('/drivers/update/:id', (req, res, next) => {
  let id = {
    _id: ObjectID(req.params.id)
  };

  dbase.collection("drivers").update({_id: id}, {$set:{'iddrivers': req.body.ObjectID,'Cin':req.body.Cin,'firstname': req.body.firstname,
  'secondname': req.body.secondname,
    'tel': req.body.tel, 
    'car': req.body.car,
    'matricule': req.body.matricule,
    'IBAN': req.body.IBAN,
    'login':req.body.login,
    'password':req.body.password}}, (err, result) => {
    if(err) {
      throw err;
    }
    res.send('driver updated sucessfully');
  });
});
//Deleting by ID
app.delete('/drivers/delete/:id', (req, res, next) => {
  let id = ObjectID(req.params.id);

  dbase.collection('drivers').deleteOne(id, (err, result) => {
    if(err) {
      throw err;
    }

    res.send('driver deleted');
  });
});
module.exports=router;