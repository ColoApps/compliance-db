import mongoose from 'mongoose';
import { Router } from 'express';
import TankCapacity from '../models/tankcapacity';
import config from '../config';

export default ({config, db}) => {
  let api = Router();

  // 'v1/tankcapacity/add'
  api.post('/add', (req, res) => {
    let newTankCapacity = new TankCapacity();

    newTankCapacity.amount = req.body.amount;
    newTankCapacity.unit = req.body.unit;

    newTankCapacity.save(err => {
      if (err) {
        res.send(err);
      }
      res.json({ message: "TankCapacity saved successfully."});
    });
  });

  //'/v1/tankcapacity -read'
  api.get('/', (req, res) => {
    TankCapacity.find({}, (err, surfacematerials) => {
      if (err) {
        res.send(err);
      }
      res.json(surfacematerials);
    });
  });

// '/v1/tankcapacity - get individual item'
api.get('/:id', (req, res) => {
  TankCapacity.findById(req.params.id, (err, tankcapacity) => {
    if (err) {
      res.send(err);
    }
    res.json(tankcapacity);
  });
});

//'/v1/tankcapacity - put (update) and item'
api.put('/:id', (req, res) => {
  TankCapacity.findById(req.params.id, (err, tankcapacity) => {
    if (err) {
      res.send(err);
    }
    tankcapacity.amount = req.body.amount;
    tankcapacity.unit = req.body.unit;

    tankcapacity.save(err => {
      if (err) {
        res.send(err);
      }
      res.json({ message: "tankcapacity updated successfully."});
    });
  });
});

//'v1/tankcapacity = delete an item'
api.delete('/:id', (req, res) => {
  TankCapacity.remove({
    _id: req.params.id
  },(err, tankcapacity) => {
    if (err) {
      res.send(err);
    }
    res.json({ message: "tankcapacity deleted"});
  });
});
return api;

}
