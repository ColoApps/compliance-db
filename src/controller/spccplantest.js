import mongoose from 'mongoose';
import { Router } from 'express';
import SPCCPlan from '../models/spccplan';
import PreviousDischarge from '../models/previousdischarge';
import LoadingRackProperties from '../models/loadingrackproperties';
import bodyParser from 'body-parser';


export default({config, db}) => {
  let api = Router();

//add loadingrack properties
//'/v1/spccplan/loadingrackproperties/add/:id'
api.post('/loadingrackproperties/add/:id', (req, res) => {
  SPCCPlan.findById(req.params.id, (err, spccplan) => {
    if (err) {
      res.send(err);
    }
    let newLoadingRack = new LoadingRackProperties();

    newLoadingRack.surfacematerial = req.body.surfacematerial;
    newLoadingRack.directionofflow = req.body.directionofflow;
    newLoadingRack.spccplan = spccplan._id;
    newLoadingRack.save((err, newLoadingRack) => {
      if (err) {
        res.send(err);
      }
      spccplan.loadingrackproperties.push(newLoadingRack);
      spccplan.save(err => {
        if (err) {
          res.send(err);
        }
        res.json({ message: 'Loading Rack info saved' });
      });
    });
  });
});

// get previousdischarge for site
//'/v1/spccplan/previousdischarge'
api.get('/previousdischarge/', (req, res) => {
  PreviousDischarge.find({}, (err, previousdischarges) => {
    if (err) {
      res.send(err);
    }
    res.json(previousdischarges);
  });
});

//add a previousdischarge for a specific spccplan
//'/v1/spccplan/previousdischarge/add/:id'
api.post('/previousdischarge/add/:id', (req, res) => {
  SPCCPlan.findById(req.params.id, (err, spccplan) => {
    if (err) {
      res.send(err);
    }
      let newPreviousDischarge = new PreviousDischarge();

      newPreviousDischarge.properties.date = req.body.date;
      newPreviousDischarge.properties.material = req.body.material;
      newPreviousDischarge.properties.volume = req.body.volume;
      newPreviousDischarge.properties.location = req.body.location;
      newPreviousDischarge.properties.spccplan = spccplan._id;
      newPreviousDischarge.save((err, previousdischarge) => {
        console.log(newPreviousDischarge);
        if (err) {
          res.send(err);
        }
        spccplan.previousdischarge.push(newPreviousDischarge);
        spccplan.save(err => {
          if (err) {
            res.send(err);
          }
          res.json({ message: "Previous Discharge info saved." });
        });
      });
    });
});

return api;

}
