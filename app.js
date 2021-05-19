const express= require('express');
const app=express();
const db=require ('./config mongoose/database');
app.use(express.static('node_modules'));
app.get('/',(req,res)=>{
    res.send("it is working from web");
    });
    app.listen(4000,()=>{
    console.log('its working in 4000');
    });