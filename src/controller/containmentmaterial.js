import mongoose from 'mongoose';
import { Router } from 'express';
import ContainmentMaterial from '../models/containmentmaterial';
import config from '../config';

export default ({config, db}) => {
  let api = Router();


  // 'v1/containmentmaterial/add'
  api.post('/add', (req, res) => {

    let newContainmentMaterial = new ContainmentMaterial();

    newContainmentMaterial.material = req.body.material;

    newContainmentMaterial.save(err => {
      if (err) {
        res.send(err);
      }
      res.json({ message: "containmentmaterial saved successfully."});
    });
  });

  //'/v1/containmentmaterial -read'
  api.get('/', (req, res) => {
    ContainmentMaterial.find({}, (err, containmentmaterials) => {
      if (err) {
        res.send(err);
      }
      res.json(containmentmaterials);
    });
  });

// '/v1/containmentmaterial - get individual item'
api.get('/:id', (req, res) => {
  ContainmentMaterial.findById(req.params.id, (err, containmentmaterial) => {
    if (err) {
      res.send(err);
    }
    res.json(containmentmaterial);
  });
});

//'/v1/containmentmaterial - put (update) and item'
api.put('/:id', (req, res) => {
  ContainmentMaterial.findById(req.params.id, (err, containmentmaterial) => {
    if (err) {
      res.send(err);
    }
    containmentmaterial.material = req.body.material;
    containmentmaterial.save(err => {
      if (err) {
        res.send(err);
      }
      res.json({ message: "containmentmaterial updated successfully."});
    });
  });
});

//'v1/containmentmaterial = delete an item'
api.delete('/:id', (req, res) => {
  ContainmentMaterial.remove({
    _id: req.params.id
  },(err, containmentmaterial) => {
    if (err) {
      res.send(err);
    }
    res.json({ message: "material deleted"});
  });
});

return api;

}
