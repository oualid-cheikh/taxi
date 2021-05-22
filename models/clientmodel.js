import{dbtaxicollections}from '../utils/consts'
//create client
export const createclient =(req)=>{
    var client = {
        cin:req.body.cin,
         firstname: req.body.firstname,
        lastname: req.body.lastname,
        tel: req.body.tel, 
       cb: req.body.cb,
        email:req.body.email,
        password:req.body.password
      }
    dbase.collection(dbtaxicollections.db_clients).save(client, (err, result) => {
      if(err) {
        return err;
      }
});}

//read all 
export const readallclient =(req)=>{dbase.collection(dbtaxicollections.db_clients).find().toArray( (err, results) => {
    res.send(results)
})}

//read by id 
export const readclientbyid =(id)=>{
     let id = ObjectID(req.params.id);
    dbase.collection(dbtaxicollections.db_clients).find(id).toArray( (err, result) => {
      if(err) {
        throw err;
      }

      res.send(result);
    });
}
//updating by id 
export const updatingbyid =(id)=>{
    let id = {
        _id: ObjectID(req.params.id)
      };
    
      dbase.collection(dbtaxicollections.db_clients).update({_id: id}, {$set:{'cin':req.body.cin,'firstname': req.body.firstname,
      'lastname': req.body.lastname,
        'tel': req.body.tel, 
        'cbe': req.body.cbe,
        'email':req.body.email,
        'password':req.body.password}}, (err, result) => {
        if(err) {
         return err;
        }
             }
)
};
//Deleting by ID
export const deletclient =(id)=>{
    let id = ObjectID(req.params.id)

  dbase.collection(dbtaxicollections.db_clients).deleteOne(id, (err, result) => {
    if(err) {
      throw err;
    }
})}

