import mongoose from 'mongoose';
import { Router } from 'express';
import FacilityInfo from '../models/facilityinfo';
import SPCCPlan from '../models/spccplan';
import TankInfo from '../models/tankinfo';
import LoadingAreaProperties from '../models/loadingareaproperties';
import LoadingRackProperties from '../models/loadingrackproperties';
import PreviousDischarge from '../models/previousdischarge';

export default({config, db }) => {
  let api = Router();

  //'/v1/facilityinfo/add'
api.post('/add', (req, res) => {
  console.log('inside facility post');
  let newFacilityInfo = new FacilityInfo();
  newFacilityInfo.facilityname = req.body.facilityname;
  newFacilityInfo.facilityaddress.street = req.body.facilityaddress.street;
  newFacilityInfo.facilityaddress.city = req.body.facilityaddress.city;
  newFacilityInfo.facilityaddress.state = req.body.facilityaddress.state;
  newFacilityInfo.facilityaddress.zipcode = req.body.facilityaddress.zipcode;

  newFacilityInfo.facilityowner = req.body.facilityowner;
  newFacilityInfo.owneraddress.street = req.body.owneraddress.street;
  newFacilityInfo.owneraddress.city = req.body.owneraddress.city;
  newFacilityInfo.owneraddress.state = req.body.owneraddress.state;
  newFacilityInfo.owneraddress.zipcode = req.body.owneraddress.zipcode;

  newFacilityInfo.facilitydescription = req.body.facilitydescription;
  newFacilityInfo.geometry.coordinates.lat = req.body.geometry.coordinates.lat;
  newFacilityInfo.geometry.coordinates.long = req.body.geometry.coordinates.long;

  newFacilityInfo.businesstype = req.body.businesstype;
  newFacilityInfo.beghours = req.body.beghours;
  newFacilityInfo.endhours = req.body.endhours;
  newFacilityInfo.schedule = req.body.schedule;

  newFacilityInfo.security.twentyfourhours = req.body.twentyfourhours;
  newFacilityInfo.security.beghours = req.body.security.beghours;
  newFacilityInfo.security.endhours = req.body.security.endhours;
  newFacilityInfo.security.days = req.body.security.days;

  newFacilityInfo.loadingareaexists = req.body.loadingareaexists;

  newFacilityInfo.loadingracksexists = req.body.loadingracksexists;

  newFacilityInfo.loadingoperations.exists = req.body.loadingoperations.exists;
  newFacilityInfo.loadingoperations.specific = req.body.loadingoperations.specific;
  newFacilityInfo.loadingoperations.procedures = req.body.loadingoperations.procedures;

  newFacilityInfo.previousdischargeexists = req.body.previousdischargeexists;

  newFacilityInfo.save(err => {
    if (err) {
      res.send(err);
    }
    res.json({ message: "FacilityInfo saved successfully"});
  });
});

//'/v1/FacilityInfo - read'
api.get('/', (req, res) => {
FacilityInfo.find({}, (err, facilityinfo) => {
  if (err) {
    res.send(err);
  }
  res.json(facilityinfo);
});
});

// '/v1/facilityinfo/:id - get individual item'
api.get('/:id', (req, res) => {
  FacilityInfo.findById(req.params.id, (err, facilityinfo) => {
    if (err) {
      res.send(err);
    }
    res.json(facilityinfo);
  });
});

// '/v1/facilityinfo/:id - Put (update) an item'
// **** NEED TO ADD REST OF FIELDS  *******
api.put('/:id', (req, res) => {
  FacilityInfo.findById(req.params.id, (err, facilityinfo) => {
    if (err) {
      res.send(err);
    }
    facilityinfo.facilityname = req.body.facilityname;
    facilityinfo.save(err => {
      if (err) {
        res.send(err);
      }
      res.json({ message: "Facility info updated" });
    });
  });
});

// '/v1/facilityinfo/:id - delete an item'
api.delete('/:id', (req, res) => {
  FacilityInfo.remove({
    _id: req.params.id
  },(err, facilityinfo)=> {
    if (err) {
      res.send(err);
    }
    res.json({ message: "SPCC Plan successfully removed." });
  });
});

// add loadingareaproperties
//'/v1/facilityinfo/loadingareaproperties/add/:id'

api.post('/loadingareaproperties/add/:id', (req, res) => {
  FacilityInfo.findById(req.params.id, (err, facilityinfo) => {
    if (err) {
      res.send(err);
    }
    let newLoadingAreaProperties = LoadingAreaProperties();
     newLoadingAreaProperties.surfacematerial = req.body.surfacematerial;
     newLoadingAreaProperties.directionofflow = req.body.directionofflow;
     newLoadingAreaProperties.properties = facilityinfo._id;
     newLoadingAreaProperties.save((err, loadingareaproperties) => {
       if (err) {
         res.send(err);
       }
       facilityinfo.loadingareaproperties.push(newLoadingAreaProperties);
       facilityinfo.save(err => {
         if (err) {
           res.send(err);
         }
         res.json({ message: 'Loading Area Properties saved' });
       });
     });
  });
});

// add loadingrackproperties
//'/v1/facilityinfo/loadingrackproperties/add/:id'

api.post('/loadingrackproperties/add/:id', (req, res) => {
  FacilityInfo.findById(req.params.id, (err, facilityinfo) => {
    if (err) {
      res.send(err);
    }
    let newLoadingRackProperties = LoadingRackProperties();
     newLoadingRackProperties.surfacematerial = req.body.surfacematerial;
     newLoadingRackProperties.directionofflow = req.body.directionofflow;
     newLoadingRackProperties.properties = facilityinfo._id;
     newLoadingRackProperties.save((err, loadingrackproperties) => {
       if (err) {
         res.send(err);
       }
       facilityinfo.loadingrackproperties.push(newLoadingRackProperties);
       facilityinfo.save(err => {
         if (err) {
           res.send(err);
         }
         res.json({ message: 'Loading Rack Properties saved' });
       });
     });
  });
});

// add spccplans
//'/v1/facilityinfo/spccplans/add/:id'

api.post('/spccplan/add/:id', (req, res) => {
  FacilityInfo.findById(req.params.id, (err, facilityinfo) => {
    if (err) {
      res.send(err);
    }
    let newSPCCPlan = SPCCPlan();
     newSPCCPlan.contactinfo.name = req.body.contactinfo.name;
     newSPCCPlan.contactinfo.phonenumber = req.body.contactinfo.phonenumber;
     newSPCCPlan.facilityinfo = facilityinfo._id;
     newSPCCPlan.save((err, spccplan) => {
       if (err) {
         res.send(err);
       }
       facilityinfo.spccplan.push(newSPCCPlan);
       facilityinfo.save(err => {
         if (err) {
           res.send(err);
         }
         res.json({ message: 'spccplan saved' });
       });
     });
  });
});

// get spccplans - all
//'/v1/facilityinfo/spccplan/'

// '/v1/spccplan/:id - get individual item'
api.get('/spccplans/:id', (req, res) => {
  console.log('inside get spccplan');
  SPCCPlan.find({facilityinfo: req.params.id}, (err, spccplan) => {
    if (err) {
      res.send(err);
    }
    res.json(spccplan);
  });
});


// **************************************************
// add previousdischarge
//'/v1/facilityinfo/previousdischarge/add/:id''

api.post('/previousdischarge/add/:id', (req, res) => {
  FacilityInfo.findById(req.params.id, (err, facilityinfo) => {
    console.log(req.params);
    if (err) {
      res.send(err);
    }
    let newPreviousDischarge = PreviousDischarge();
     newPreviousDischarge.date = req.body.date;
     newPreviousDischarge.material = req.body.material;
     newPreviousDischarge.volume = req.body.volume;
     newPreviousDischarge.location = req.body.location;
     newPreviousDischarge.facilityinfo = facilityinfo._id;
     newPreviousDischarge.save((err, previousdischarge) => {
       if (err) {
         res.send(err);
       }
       facilityinfo.previousdischarge.push(newPreviousDischarge);
       facilityinfo.save(err => {
         if (err) {
           res.send(err);
           
         }
         res.json({ message: 'PreviousDischarge saved' });
       });
     });
  });
});

// get previousdischarge - specific
// '/v1/previousdischarge/:id - get individual item'
api.get('/previousdischarge/:id', (req, res) => {
  console.log('inside get previousdischarge');
  PreviousDischarge.find({facilityinfo: req.params.id}, (err, previousdischarge) => {
    if (err) {
      res.send(err);
    }
    res.json(previousdischarge);
  });
});

return api;

}
