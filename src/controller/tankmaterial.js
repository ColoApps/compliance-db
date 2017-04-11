import mongoose from 'mongoose';
import { Router } from 'express';
import TankMaterial from '../models/tankmaterial';
import config from '../config';

export default ({config, db}) => {
  let api = Router();

  // 'v1/schedule/add'
  api.post('/add', (req, res) => {
    let newTankMaterial = new TankMaterial();

    newTankMaterial.type = req.body.type;

    newTankMaterial.save(err => {
      if (err) {
        res.send(err);
      }
      res.json({ message: "tankmaterial saved successfully."});
    });
  });

  //'/v1/tankmaterials -read'
  api.get('/', (req, res) => {
    TankMaterial.find({}, (err, tankmaterials) => {
      if (err) {
        res.send(err);
      }
      res.json(tankmaterials);
    });
  });

// '/v1/tankmaterial - get individual item'
api.get('/:id', (req, res) => {
  TankMaterial.findById(req.params.id, (err, tankmaterial) => {
    if (err) {
      res.send(err);
    }
    res.json(tankmaterial);
  });
});

//'/v1/tankmaterial - put (update) and item'
api.put('/:id', (req, res) => {
  TankMaterial.findById(req.params.id, (err, tankmaterial) => {
    if (err) {
      res.send(err);
    }
    tankmaterial.type = req.body.type;
    tankmaterial.save(err => {
      if (err) {
        res.send(err);
      }
      res.json({ message: "tankmaterial updated successfully."});
    });
  });
});

//'v1/tankmaterial = delete an item'
api.delete('/:id', (req, res) => {
  TankMaterial.remove({
    _id: req.params.id
  },(err, tankmaterial) => {
    if (err) {
      res.send(err);
    }
    res.json({ message: "material deleted"});
  });
});

return api;

}
