import mongoose from 'mongoose';
import { Router } from 'express';
import SurfaceMaterial from '../models/surfacematerial';
import config from '../config';

export default ({config, db}) => {
  let api = Router();

  // 'v1/surfacematerial/add'
  api.post('/add', (req, res) => {
    console.log('inside post');
    let newSurfaceMaterial = new SurfaceMaterial();

    newSurfaceMaterial.material = req.body.material;

    newSurfaceMaterial.save(err => {
      if (err) {
        res.send(err);
      }
      res.json({ message: "SurfaceMaterial saved successfully."});
    });
  });

  //'/v1/surfacematerials -read'
  api.get('/', (req, res) => {
    SurfaceMaterial.find({}, (err, surfacematerials) => {
      if (err) {
        res.send(err);
      }
      res.json(surfacematerials);
    });
  });

// '/v1/surfacematerial - get individual item'
api.get('/:id', (req, res) => {
  SurfaceMaterial.findById(req.params.id, (err, surfacematerial) => {
    if (err) {
      res.send(err);
    }
    res.json(surfacematerial);
  });
});

//'/v1/surfacematerial - put (update) and item'
api.put('/:id', (req, res) => {
  SurfaceMaterial.findById(req.params.id, (err, surfacematerial) => {
    if (err) {
      res.send(err);
    }
    surfacematerial.material = req.body.material;
    surfacematerial.save(err => {
      if (err) {
        res.send(err);
      }
      res.json({ message: "surfacematerial updated successfully."});
    });
  });
});

//'v1/surfacematerial = delete an item'
api.delete('/:id', (req, res) => {
  SurfaceMaterial.remove({
    _id: req.params.id
  },(err, surfacematerial) => {
    if (err) {
      res.send(err);
    }
    res.json({ message: "material deleted"});
  });
});

return api;

}
