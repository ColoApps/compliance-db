import mongoose from 'mongoose';
import { Router } from 'express';
import DischargePointType from '../models/dischargepointtype';
import config from '../config';

import { authenticate } from '../middleware/authMiddleware';

export default ({config, db}) => {
  let api = Router();

  // 'v1/dischargepointtype/add'
  api.post('/add', (req, res) => {
    console.log('inside post');
    let newDischargePointType = new DischargePointType();

    newDischargePointType.type = req.body.type;

    newDischargePointType.save(err => {
      if (err) {
        res.send(err);
      }
      res.json({ message: "DischargePointType saved successfully."});
    });
  });

  //'/v1/dischargepointtype -read'
  api.get('/', (req, res) => {
    DischargePointType.find({}, (err, dischargepointtype) => {
      if (err) {
        res.send(err);
      }
      res.json(dischargepointtype);
    });
  });

// '/v1/dischargepointtype - get individual item'
api.get('/:id', (req, res) => {
  DischargePointType.findById(req.params.id, (err, dischargepointtype) => {
    if (err) {
      res.send(err);
    }
    res.json(dischargepointtype);
  });
});

//'/v1/dischargepointtype - put (update) and item'
api.put('/:id', (req, res) => {
  DischargePointType.findById(req.params.id, (err, dischargepointtype) => {
    if (err) {
      res.send(err);
    }
    dischargepointtype.type = req.body.type;
    dischargepointtype.save(err => {
      if (err) {
        res.send(err);
      }
      res.json({ message: "dischargepointtype updated successfully."});
    });
  });
});

//'v1/dischargepointtype = delete an item'
api.delete('/:id', (req, res) => {
  DischargePointType.remove({
    _id: req.params.id
  },(err, dischargepointtype) => {
    if (err) {
      res.send(err);
    }
    res.json({ message: "type deleted"});
  });
});
return api;

}
