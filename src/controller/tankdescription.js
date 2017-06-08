import mongoose from 'mongoose';
import { Router } from 'express';
import TankDesc from '../models/tankdescription';
import config from '../config';

import { authenticate } from '../middleware/authMiddleware';

export default ({config, db}) => {
  let api = Router();

  // 'v1/tankdescription/add'
  api.post('/add', (req, res) => {
    console.log('inside post');
    let newTankDesc = new TankDesc();
    newTankDesc.text = req.body.text;

    newTankDesc.save(err => {
      if (err) {
        res.send(err);
      }
      res.json({ message: "TankDesc saved successfully."});
    });
  });

  //'/v1/tankdescs -read'
  api.get('/', (req, res) => {
    TankDesc.find({}, (err, tankdescs) => {
      if (err) {
        res.send(err);
      }
      res.json(tankdescs);
    });
  });

// '/v1/tankdesc - get individual item'
api.get('/:id', (req, res) => {
  TankDesc.findById(req.params.id, (err, tankdesc) => {
    if (err) {
      res.send(err);
    }
    res.json(tankdesc);
  });
});

//'/v1/tankdesc - put (update) and item'
api.put('/:id', (req, res) => {
  TankDesc.findById(req.params.id, (err, tankdesc) => {
    if (err) {
      res.send(err);
    }
    tankdesc.text = req.body.text;
    tankdesc.save(err => {
      if (err) {
        res.send(err);
      }
      res.json({ message: "tankdesc updated successfully."});
    });
  });
});

//'v1/tankdesc = delete an item'
api.delete('/:id', (req, res) => {
  TankDesc.remove({
    _id: req.params.id
  },(err, tankdesc) => {
    if (err) {
      res.send(err);
    }
    res.json({ message: "material deleted"});
  });
});
return api;

}
