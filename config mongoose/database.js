const mongoose=require('mongoose');
mongoose.connect('mongodb://localhost:27017/taxi',(err)=>{
    if(err){
        console.log(err);
    }
    else{
        console.log('connected to db succesfily');
    }
})