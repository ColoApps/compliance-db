import mongoose from 'mongoose';
import { Router } from 'express';
import SPCCPlan from '../models/spccplan';
import FacilityInfo from '../models/facilityinfo'
import bodyParser from 'body-parser';


export default({config, db}) => {
  let api = Router();
  console.log('inside spccplan controller');

  // 'v1/spccplan/add'
  api.post('/add', (req, res) => {
    console.log('inside post');
    let newPetrolTypes = new PetrolTypes();

    newPetrolTypes.type = req.body.type;

    newPetrolTypes.save(err => {
      if (err) {
        res.send(err);
      }
      res.json({ message: "PetrolTypes saved successfully."});
    });
  });

  api.get('/:id', (req, res) => {
    console.log('using spccplan controller');
  //  SPCCPlan.find({}, (err, spccplans) => {
  //SPCCPlan.find( { 'spccplans._id': req.params.id }, (err, spccplan) => {
    SPCCPlan.find({facilityinfo: req.params.id}, (err, spccplan) => {
      if (err) {
        res.send(err);
      }
      res.json(spccplan);
    });
  });

// '/v1/petroltypes - get individual item'
api.get('/:id', (req, res) => {
  PetrolTypes.findById(req.params.id, (err, petroltypes) => {
    if (err) {
      res.send(err);
    }
    res.json(petroltypes);
  });
});

//'/v1/petroltypes - put (update) and item'
api.put('/:id', (req, res) => {
  PetrolTypes.findById(req.params.id, (err, petroltype) => {
    if (err) {
      res.send(err);
    }
    petroltype.type = req.body.type;
    petroltype.save(err => {
      if (err) {
        res.send(err);
      }
      res.json({ message: "petroltypes updated successfully."});
    });
  });
});

//'v1/petroltypes = delete an item'
api.delete('/:id', (req, res) => {
  PetrolTypes.remove({
    _id: req.params.id
  },(err, petroltypes) => {
    if (err) {
      res.send(err);
    }
    res.json({ message: "material deleted"});
  });
});
return api;


}
