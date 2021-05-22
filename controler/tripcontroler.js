const express=require("express");
const router=express.Router();
const MongoClient = require('mongodb').MongoClient
var ObjectID = require('mongodb').ObjectID; 
const bodyParser= require('body-parser').json
const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
import {createtrip, readalltrips,readtripbyid, updatingtripbyid,delettrip} from '../models/tripmodel'
//connection db 

//create trip :post
app.post('/trips/add', (req, res, next) => {
    
  try{
    await createtrip(req);
       res.send('trip added successfully');
  }catch(err){
console.log(err);

  }


});
//read trip : get
app.get('/trips', (req, res) => {
  try{
    await readalltrips(req);
      res.send('all trips');
  }catch(err){
console.log(err);
  }
});
// read by Id 
app.get('/trip/:id', (req, res, next) => {
 
  try{
    await readtripbyid(id);
      res.send(' trip finded');
  }catch(err){
console.log(err);
  }
 });
//Updating by ID
app.put('/trips/update/:id', (req, res, next) => {
  try{
    await updatingtripbyid(id);
  res.send('trip updated sucessfully');
  }catch(err){
console.log(err);
  }
   
  });
//Deleting by ID
app.delete('/trips/delete/:id', (req, res, next) => {
  try{
    await delettrip(id);
    res.send('trip deleted');
  }catch(err){
console.log(err);
  }
   
  });
module.exports=router;