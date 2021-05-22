const express=require("express");
const router=express.Router();
const MongoClient = require('mongodb').MongoClient
var ObjectID = require('mongodb').ObjectID; 
const bodyParser= require('body-parser').json
const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
import {createdriver, readalldrivers,readdriverbyid, updatingdriverbyid,deletdriver} from '../models/drivermodel'
//connection db 
//create driver :post
app.post('/driver/add', (req, res, next) => {
    
  try{
    await createdriver(req);
      res.send('driver added successfully');
  }catch(err){
console.log(err);

  }
})
//read all drivers : get
app.get('/drivers', (req, res) => {
  try{
    await readalldrivers(req);
      res.send('all drivers');
  }catch(err){
console.log(err);
  }
});
//read by id 
app.get('/driver/:id', (req, res, next) => {
 
  try{
    await readdriverbyid(id);
      res.send(' driver finded');
  }catch(err){
console.log(err);
  }
 });
//Updating by ID
app.put('/drivers/update/:id', (req, res, next) => {
  try{
    await updatingdriverbyid(id);
  res.send('driver updated sucessfully');
  }catch(err){
console.log(err);
  }
});
//Deleting by ID
app.delete('/drivers/delete/:id', (req, res, next) => {
  try{
    await deletclient(id);
   res.send('driver deleted');
  }catch(err){
console.log(err);
  }
});
module.exports=router;