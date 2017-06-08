import mongoose from 'mongoose';
import { Router } from 'express';
import Shape from '../models/shape';
import config from '../config';

import { authenticate } from '../middleware/authMiddleware';

export default ({config, db}) => {
  let api = Router();

  // 'v1/shape/add'
  api.post('/add', (req, res) => {
    console.log('inside post');
    let newShape = new Shape();

    newShape.shape = req.body.shape;

    newShape.save(err => {
      if (err) {
        res.send(err);
      }
      res.json({ message: "Shape saved successfully."});
    });
  });

  //'/v1/shapes -read'
  api.get('/', (req, res) => {
    Shape.find({}, (err, shapes) => {
      if (err) {
        res.send(err);
      }
      res.json(shapes);
    });
  });

// '/v1/shape - get individual item'
api.get('/:id', (req, res) => {
  Shape.findById(req.params.id, (err, shape) => {
    if (err) {
      res.send(err);
    }
    res.json(shape);
  });
});

//'/v1/shape - put (update) and item'
api.put('/:id', (req, res) => {
  Shape.findById(req.params.id, (err, shape) => {
    if (err) {
      res.send(err);
    }
    shape.shape = req.body.shape;
    shape.save(err => {
      if (err) {
        res.send(err);
      }
      res.json({ message: "shape updated successfully."});
    });
  });
});

//'v1/shape = delete an item'
api.delete('/:id', (req, res) => {
  Shape.remove({
    _id: req.params.id
  },(err, shape) => {
    if (err) {
      res.send(err);
    }
    res.json({ message: "material deleted"});
  });
});
return api;

}
