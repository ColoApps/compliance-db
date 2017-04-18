import mongoose from 'mongoose';
import { Router } from 'express';
import FacilityInfo from '../models/facilityinfo';
import SPCCPlan from '../models/spccplan';
import TankInfo from '../models/tankinfo';
import LoadingAreaProperties from '../models/loadingareaproperties';
import LoadingRackProperties from '../models/loadingrackproperties';
import PreviousDischarge from '../models/previousdischarge';
import Containment from '../models/containment';

export default({config, db }) => {
  let api = Router();

// **********FacilityInfo***************

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
  newFacilityInfo.geometry.coordinates = req.body.geometry.coordinates;
  //newFacilityInfo.geometry.coordinates.long = req.body.geometry.coordinates.long;

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
//  FacilityInfo.find( { '_id': req.params.id } => {
//  FacilityInfo.find( { '_id': req.params.id }, (err, facilityinfo) => {
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
    facilityinfo.facilityaddress.street = req.body.facilityaddress.street;
    facilityinfo.facilityaddress.city = req.body.facilityaddress.city;
    facilityinfo.facilityaddress.state = req.body.facilityaddress.state;
    facilityinfo.facilityaddress.zipcode = req.body.facilityaddress.zipcode;

    facilityinfo.facilityowner = req.body.facilityowner;
    facilityinfo.owneraddress.street = req.body.owneraddress.street;
    facilityinfo.owneraddress.city = req.body.owneraddress.city;
    facilityinfo.owneraddress.state = req.body.owneraddress.state;
    facilityinfo.owneraddress.zipcode = req.body.owneraddress.zipcode;

    facilityinfo.facilitydescription = req.body.facilitydescription;
    facilityinfo.geometry.coordinates = req.body.geometry.coordinates;
    //facilityinfo.geometry.coordinates = req.body.geometry.coordinates.long;

    facilityinfo.businesstype = req.body.businesstype;
    facilityinfo.beghours = req.body.beghours;
    facilityinfo.endhours = req.body.endhours;
    facilityinfo.schedule = req.body.schedule;

    facilityinfo.security.twentyfourhours = req.body.twentyfourhours;
    facilityinfo.security.beghours = req.body.security.beghours;
    facilityinfo.security.endhours = req.body.security.endhours;
    facilityinfo.security.days = req.body.security.days;

    facilityinfo.loadingareaexists = req.body.loadingareaexists;

    facilityinfo.loadingracksexists = req.body.loadingracksexists;

    facilityinfo.loadingoperations.exists = req.body.loadingoperations.exists;
    facilityinfo.loadingoperations.specific = req.body.loadingoperations.specific;
    facilityinfo.loadingoperations.procedures = req.body.loadingoperations.procedures;

    facilityinfo.previousdischargeexists = req.body.previousdischargeexists;

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
    res.json({ message: "FacilityInfo successfully removed." });
  });
});
// ******* LoadingArea ******************

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

api.put('/loadingrackproperties/update/:id', (req, res) => {
  var rackToUpdate = req.params.id;
  console.log(rackToUpdate);
  FacilityInfo.find({'loadingrackproperties._id': rackToUpdate}, (err, loadingrackproperties) => {
    console.log('step 1');
    console.log(loadingrackproperties);
    if (err) {
      res.send(err);
    } else {

        surfacematerial = req.body.surfacematerial || loadingrackproperties.surfacematerial;
        directionofflow = req.body.directionofflow || loadingrackproperties.directionofflow;

        loadingrackproperties.save(function (err, loadingrackproperties){
          if (err) {
            res.send(err)
          }
          var response = {
            message: "Rack info updated",
            id: areaToUpdate,
            loadingrackproperties
          };
          res.send(response);
        });
      }
    });
  });

// ************ LoadingRacks ****************

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

// *********** SPCCPlan ****************

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

     newSPCCPlan.drps1.name = req.body.drps1.name;
     newSPCCPlan.drps1.title = req.body.drps1.title;
     newSPCCPlan.drps1.phone = req.body.drps1.phone;
     newSPCCPlan.drps1.locofplan = req.body.drps1.locofplan;

     newSPCCPlan.drps2.name = req.body.drps2.name;
     newSPCCPlan.drps2.title = req.body.drps2.title;
     newSPCCPlan.drps2.phone = req.body.drps2.phone;
     newSPCCPlan.drps2.locofplan = req.body.drps2.locofplan;

     newSPCCPlan.drps3.name = req.body.drps3.name;
     newSPCCPlan.drps3.title = req.body.drps3.title;
     newSPCCPlan.drps3.phone = req.body.drps3.phone;
     newSPCCPlan.drps3.locofplan = req.body.drps3.locofplan;

     newSPCCPlan.question1.text = req.body.question1.text;
     newSPCCPlan.question1.answer = req.body.question1.answer;

     newSPCCPlan.question2.text = req.body.question2.text;
     newSPCCPlan.question2.answer = req.body.question2.answer;

     newSPCCPlan.question3.text = req.body.question3.text;
     newSPCCPlan.question3.answer = req.body.question3.answer;

     newSPCCPlan.question4.text = req.body.question4.text;
     newSPCCPlan.question4.answer = req.body.question4.answer;

     newSPCCPlan.question5.text = req.body.question5.text;
     newSPCCPlan.question5.answer = req.body.question5.answer;

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

 // '/v1/spccplan/:id - get plans for a facility'
api.get('/spccplans/:id', (req, res) => {
  console.log('inside get spccplan id');
//SPCCPlan.find( { 'spccplans._id': req.params.id }, (err, spccplan) => {
  SPCCPlan.find({facilityinfo: req.params.id}, (err, spccplan) => {
    if (err) {
      res.send(err);
    }
    res.json(spccplan);
  });
});
// ************ PreviousDischarge ***************

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

// ************ TankInfo ***************
// add tankinfo
//'/v1/facilityinfo/tankinfo/add'

api.post('/tankinfo/add/:id', (req, res) => {
  console.log('inside tank post');
  FacilityInfo.findById(req.params.id, (err, facilityinfo) => {
    console.log('inside add tankinfo');
    if (err) {
      res.send(err);
    }
    let newTankInfo = TankInfo();
    newTankInfo.category = req.body.category;
    newTankInfo.tankdesc = req.body.tankdesc;
    newTankInfo.capacity = req.body.capacity;
    newTankInfo.unit = req.body.unit;
    newTankInfo.petroltype = req.body.petroltype;
    newTankInfo.empty = req.body.empty;
    newTankInfo.shape = req.body.shape;
    newTankInfo.material = req.body.material;
    newTankInfo.heatingcoils = req.body.heatingcoils;

    newTankInfo.eft = req.body.eft;
    newTankInfo.type = req.body.type;

    newTankInfo.partiallyburied = req.body.partiallyburied;
    newTankInfo.registered = req.body.registered;
    newTankInfo.facilityinfo = facilityinfo._id;

    newTankInfo.save((err, tankinfo) => {
      if (err) {
        res.send(err);
      }
      facilityinfo.tankinfo.push(newTankInfo);
      facilityinfo.save(err => {
        if (err) {
          res.send(err);
        }
        res.json({ message: 'Tank Info saved' });
      });
    });
  });
});

// get tankinfo - specific
// '/v1/tankinfo/:id - get individual item'
api.get('/tankinfo/:id', (req, res) => {
  console.log('inside get tankinfo');
  TankInfo.find({facilityinfo: req.params.id}, (err, tankinfo) => {
    if (err) {
      res.send(err);
    }
    res.json(tankinfo);
  });
});

// ********** Containment ******************

api.post('/containment/add/:id', (req, res) => {
  console.log('inside tank post');
  FacilityInfo.findById(req.params.id, (err, facilityinfo) => {
    console.log('inside add containment');
    if (err) {
      res.send(err);
    }
    let newContainment = Containment();
     newContainment.doublewall = req.body.doublewall;
     newContainment.exists = req.body.exists;
     newContainment.material = req.body.material;
     newContainment.length = req.body.length;
     newContainment.width = req.body.width;
     newContainment.height = req.body.height;

     newContainment.drainpipesexist = req.body.drainpipesexist;

     newContainment.pipe1properties.valved = req.body.pipe1properties.valved;
     newContainment.pipe1properties.capped = req.body.pipe1properties.capped;
     newContainment.pipe1properties.open = req.body.pipe1properties.open;
     newContainment.pipe1properties.location = req.body.pipe1properties.location;
     newContainment.facilityinfo = facilityinfo;

     newContainment.save((err, containment) => {
       if (err) {
         res.send(err);
       }
       facilityinfo.containment.push(newContainment);
       facilityinfo.save(err => {
         if (err) {
           res.send(err);

         }
         res.json({ message: 'Containment saved' });
       });
     });
  });
});

// get containment - specific
// '/v1/containment/:id - get individual item'
api.get('/containment/:id', (req, res) => {
  console.log('inside get containment');
  Containment.find({facilityinfo: req.params.id}, (err, containment) => {
    if (err) {
      res.send(err);
    }
    res.json(containment);
  });
});

return api;

}
