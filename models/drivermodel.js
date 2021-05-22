import{dbtaxicollections}from '../utils/consts'
//create driver
export const createdriver =(req)=>{
    var driver = {
        iddrivers: req.body.ObjectID,
        cin:req.body.cin,
         firstname: req.body.firstname,
        lastname: req.body.lastname,
        tel: req.body.tel, 
        car: req.body.car,
        matricule: req.body.matricule,
        IBAN: req.body.IBAN,
        email:req.body.email,
        password:req.body.password
      }
    dbase.collection(dbtaxicollections.db_drivers).save(driver, (err, result) => {
      if(err) {
        return err;
      }
});}

//read all 
export const readalldrivers =(req)=>{dbase.collection(dbtaxicollections.db_drivers).find().toArray( (err, results) => {
    res.send(results)
})}

//read by id 
export const readdriverbyid =(id)=>{
     let id = ObjectID(req.params.id);
    dbase.collection(dbtaxicollections.db_drivers).find(id).toArray( (err, result) => {
      if(err) {
        throw err;
      }

      res.send(result);
    });
}
//updating by id 
export const updatingdriverbyid =(id)=>{
    let id = {
        _id: ObjectID(req.params.id)
      };
    
      dbase.collection(dbtaxicollections.db_drivers).update({_id: id}, {$set:{'iddrivers': req.body.ObjectID,'cin':req.body.cin,'firstname': req.body.firstname,
      'secondname': req.body.secondname,
        'tel': req.body.tel, 
        'car': req.body.car,
        'matricule': req.body.matricule,
        'IBAN': req.body.IBAN,
        'email':req.body.email,
        'password':req.body.password}}, (err, result) => {
        if(err) {
         return err;
        }
             }
)
};
//Deleting by ID
export const deletdriver =(id)=>{
    let id = ObjectID(req.params.id)

  dbase.collection(dbtaxicollections.db_drivers).deleteOne(id, (err, result) => {
    if(err) {
      throw err;
    }
})}

