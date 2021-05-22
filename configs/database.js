const mongoose=require('mongoose');
 mongoose.connect('mongodb://localhost:27017/taxi',(err)=>{
    if(err){
        console.log(err);
    }
    else{
        console.log('connected to db succesfily');
    }
})
//MongoClient.connect('e.g.mongodb+srv://username:password@culster0-jtpxd.mongodb.net/admin', (err, database) => {
  //  var dbase = db.db("taxi");
   //   if (err) return console.log(err)
  //    app.listen(6000, () => {
   //     console.log('app working on 6000')
//  })
//})