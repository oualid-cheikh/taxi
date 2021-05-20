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
//create client :post
app.post('/clients/add', (req, res, next) => {
    
  var clients = {
    idclients: req.body.ObjectID,
    Cin:req.body.Cin,
     firstname: req.body.firstname,
    secondname: req.body.secondname,
    tel: req.body.tel, 
    cartebanc: req.body.cartebanc,
    login:req.body.login,
    password:req.body.password
  }
})
dbase.collection("clients").save(clients, (err, result) => {
  if(err) {
    console.log(err);
  }

  res.send('client added successfully');
});
//read clients : get
app.get('/clients', (req, res) => {
  dbase.collection('clients').find().toArray( (err, results) => {
    res.send(results)
  });
});
//Updating by ID
app.put('/clients/update/:id', (req, res, next) => {
  let id = {
    _id: ObjectID(req.params.id)
  };

  dbase.collection("clients").update({_id: id}, {$set:{'idclients': req.body.ObjectID,'Cin':req.body.Cin,'firstname': req.body.firstname,
  'secondname': req.body.secondname,
    'tel': req.body.tel, 
    'cartebanc': req.body.cartebanc,
    'login':req.body.login,
    'password':req.body.password}}, (err, result) => {
    if(err) {
      throw err;
    }
    res.send('client updated sucessfully');
  });
});
//Deleting by ID
app.delete('/clients/delete/:id', (req, res, next) => {
  let id = ObjectID(req.params.id);

  dbase.collection('clients').deleteOne(id, (err, result) => {
    if(err) {
      throw err;
    }

    res.send('clients deleted');
  });
});
module.exports=router;