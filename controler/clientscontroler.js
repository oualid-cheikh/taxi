const express=require("express");
const router=express.Router();
const MongoClient = require('mongodb').MongoClient
var ObjectID = require('mongodb').ObjectID; 
const bodyParser= require('body-parser').json
const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
import {createclient, readallclient,readclientbyid, updatingbyid,deletclient} from '../models/clientmodel'
//connection db 
//create client :post
app.post('/clients/add',async (req, res) => {
    try{
      await createclient(req);
        res.send('client added successfully');
    }catch(err){
console.log(err);

    }
  })
//read clients : get
app.get('/clients', (req, res) => {
  try{
    await readallclient(req);
      res.send('all client');
  }catch(err){
console.log(err);
  }
});
// read by Id 
app.get('/client/:id', (req, res, next) => {
 
  try{
    await readclientbyid(id);
      res.send(' client finded');
  }catch(err){
console.log(err);
  }
 });
//Updating by ID
app.put('/clients/update/:id', (req, res, next) => {
 
  try{
    await updatingbyid(id);
  res.send('client updated sucessfully');
  }catch(err){
console.log(err);
  }
    
  });
//Deleting by ID
app.delete('/client/delete/:id', (req, res, next) => {
  try{
    await deletclient(id);
   res.send('client deleted');
  }catch(err){
console.log(err);
  }
  });
module.exports=router;