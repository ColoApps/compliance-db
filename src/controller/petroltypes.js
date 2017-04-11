import mongoose from 'mongoose';
import { Router } from 'express';
import PetrolTypes from '../models/petroltypes';
import config from '../config';

export default ({config, db}) => {
  let api = Router();

  // 'v1/schedule/add'
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

  //'/v1/petroltypess -read'
  api.get('/', (req, res) => {
    PetrolTypes.find({}, (err, petroltypes) => {
      if (err) {
        res.send(err);
      }
      res.json(petroltypes);
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
