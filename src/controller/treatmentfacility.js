import mongoose from 'mongoose';
import { Router } from 'express';
import TreatmentFacility from '../models/treatmentfacility';
import config from '../config';

import { authenticate } from '../middleware/authMiddleware';

export default ({config, db}) => {
  let api = Router();

  // 'v1/treatmentfacility/add'
  api.post('/add', (req, res) => {
    console.log('inside post');
    let newTreatmentFacility = new TreatmentFacility();

    newTreatmentFacility.type = req.body.type;

    newTreatmentFacility.save(err => {
      if (err) {
        res.send(err);
      }
      res.json({ message: "treatmentfacility saved successfully."});
    });
  });

  //'/v1/treatmentfacilitys -read'
  api.get('/', (req, res) => {
    TreatmentFacility.find({}, (err, treatmentfacilities) => {
      if (err) {
        res.send(err);
      }
      res.json(treatmentfacilities);
    });
  });

// '/v1/treatmentfacility - get individual item'
api.get('/:id', (req, res) => {
  TreatmentFacility.findById(req.params.id, (err, treatmentfacility) => {
    if (err) {
      res.send(err);
    }
    res.json(treatmentfacility);
  });
});

//'/v1/treatmentfacility - put (update) and item'
api.put('/:id', (req, res) => {
  TreatmentFacility.findById(req.params.id, (err, treatmentfacility) => {
    if (err) {
      res.send(err);
    }
    treatmentfacility.material = req.body.material;
    treatmentfacility.save(err => {
      if (err) {
        res.send(err);
      }
      res.json({ message: "treatmentfacility updated successfully."});
    });
  });
});

//'v1/treatmentfacility = delete an item'
api.delete('/:id', (req, res) => {
  TreatmentFacility.remove({
    _id: req.params.id
  },(err, treatmentfacility) => {
    if (err) {
      res.send(err);
    }
    res.json({ message: "material deleted"});
  });
});
return api;

}
