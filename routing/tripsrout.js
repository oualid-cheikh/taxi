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
//create trip :post
app.post('/trips/add', (req, res, next) => {
    
  var trips = {
    idtrips: req.body.ObjectID,
    iddrivers: req.body.iddrivers,
    idclients: req.body.idclients,
    starting_point: req.body.starting_point,
    final_destination:req.body.final_destination,
    tariff: req.body.tariff
  }
})
dbase.collection("trips").save(trips, (err, result) => {
  if(err) {
    console.log(err);
  }

  res.send('trip added successfully');
});
//read trips : get
app.get('/trips', (req, res) => {
  dbase.collection('trips').find().toArray( (err, results) => {
    res.send(results)
  });
});
//Updating by ID
app.put('/trips/update/:id', (req, res, next) => {
  let id = {
    _id: ObjectID(req.params.id)
  };

  dbase.collection("trips").update({_id: id}, {$set:{'idtrips': req.body.ObjectID,
    'iddrivers': req.body.iddrivers,
    'idclients': req.body.idclients,
    'starting_point': req.body.starting_point,
    'final_destination':req.body.final_destination,
    'tariff': req.body.tariff}}, (err, result) => {
    if(err) {
      throw err;
    }
    res.send('trip updated sucessfully');
  });
});
//Deleting by ID
app.delete('/trips/delete/:id', (req, res, next) => {
  let id = ObjectID(req.params.id);

  dbase.collection('trips').deleteOne(id, (err, result) => {
    if(err) {
      throw err;
    }

    res.send('trips deleted');
  });
});
module.exports=router;