import{dbtaxicollections}from '../utils/consts'
//create trip
export const createtrip =(req)=>{
    var trip = {
        iddriver: req.body.iddriver,
        idclient: req.body.idclient,
        starting_point: req.body.starting_point,
        final_destination:req.body.final_destination,
        tariff: req.body.tariff
      }
    dbase.collection(dbtaxicollections.db_trips).save(trip, (err, result) => {
      if(err) {
        return err;
      }
});}

//read all 
export const readalltrips =(req)=>{dbase.collection(dbtaxicollections.db_trips).find().toArray( (err, results) => {
    res.send(results)
})}

//read by id 
export const readtripbyid =(id)=>{
     let id = ObjectID(req.params.id);
    dbase.collection(dbtaxicollections.db_trips).find(id).toArray( (err, result) => {
      if(err) {
        throw err;
      }

      res.send(result);
    });
}
//updating by id 
export const updatingtripbyid =(id)=>{
    let id = {
        _id: ObjectID(req.params.id)
      };
    
      dbase.collection(dbtaxicollections.db_trips).update({_id: id}, {$set:{'iddriver': req.body.iddrivers,
      'idclient': req.body.idclients,
      'starting_point': req.body.starting_point,
      'final_destination':req.body.final_destination,
      'tariff': req.body.tariff}}, (err, result) => {
        if(err) {
         return err;
        }
             }
)
};
//Deleting by ID
export const delettrip =(id)=>{
    let id = ObjectID(req.params.id)

  dbase.collection(dbtaxicollections.db_trips).deleteOne(id, (err, result) => {
    if(err) {
      throw err;
    }
})}

