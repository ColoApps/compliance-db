import mongoose from 'mongoose';
import { Router } from 'express';
import TankCategory from '../models/tankcategory';
import config from '../config';

export default ({config, db}) => {
  let api = Router();

// add new category
// '/v1/tankcategory/add'
api.post('/add', (req, res) => {
  console.log('inside post');
  let newTankCategory = new TankCategory();
  newTankCategory.category = req.body.category;

  newTankCategory.save(err => {
    if (err) {
      res.send(err);
    }
    res.json({ message: "Category saved successfully"});
  });
});

//'/v1/tankcategories -read'
api.get('/', (req, res) => {
  TankCategory.find({}, (err, tankcategories) => {
    if (err) {
      res.send(err);
    }
    res.json(tankcategories);
  });
});

// '/v1/tankcategory - get individual item'
api.get('/:id', (req, res) => {
TankCategory.findById(req.params.id, (err, tankcategory) => {
  if (err) {
    res.send(err);
  }
  res.json(tankcategory);
});
});

//'/v1/tankcategory - put (update) and item'
api.put('/:id', (req, res) => {
TankCategory.findById(req.params.id, (err, tankcategory) => {
  if (err) {
    res.send(err);
  }
  tankcategory.category = req.body.category;
  tankcategory.save(err => {
    if (err) {
      res.send(err);
    }
    res.json({ message: "tankcategory updated successfully."});
  });
});
});

//'v1/tankcategory = delete an item'
api.delete('/:id', (req, res) => {
TankCategory.remove({
  _id: req.params.id
},(err, tankcategory) => {
  if (err) {
    res.send(err);
  }
  res.json({ message: "material deleted"});
});
});

return api;

}
