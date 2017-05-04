import mongoose from 'mongoose';
import { Router } from 'express';
import FacilityInfo from '../models/facilityinfo';
import SPCCPlan from '../models/spccplan';
import TankInfo from '../models/tankinfo';
import LoadingAreaProperties from '../models/loadingareaproperties';
import LoadingRackProperties from '../models/loadingrackproperties';
import PreviousDischarge from '../models/previousdischarge';
import Containment from '../models/containment';
import PipingInspection from '../models/pipinginspection';
import MonthlyInspectionHeader from '../models/monthlyinspectionheader';
import AnnualInspectionHeader from '../models/annualinspectionheader';
import MonthlyInspectionResults from '../models/monthlyinspectionresults';
import AnnualInspectionResults from '../models/annualinspectionresults';

export default({config, db }) => {
  let api = Router();
  var mongoose = require('mongoose');
  var trueInd = 1;
  var falseInd = 0;

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
  newFacilityInfo.loadingrackproperties.racknumber = req.body.loadingrackproperties.racknumber;
  newFacilityInfo.loadingrackproperties.surfacematerial = req.body.loadingrackproperties.surfacematerial;
  newFacilityInfo.loadingrackproperties.directionofflow = req.body.loadingrackproperties.directionofflow;

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
     newLoadingAreaProperties.facilityinfo = facilityinfo._id;
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

// 'v1'/loadingareaproperties/:id - get loadingarea by id
api.get('/loadingareaproperties/:id', (req, res) => {
  console.log('inside get lap');
  LoadingAreaProperties.find({'facilityinfo': req.params.id}, (err, loadingareaproperties) => {
    if (err) {
      res.send(err);
    }
    res.json(loadingareaproperties);
  });
} );

api.put('/loadingareaproperties/:id/edit', (req, res) => {
  console.log(req.params.id);

  LoadingAreaProperties.findOneAndUpdate({'_id': req.params.id},
    { "$set": {'surfacematerial': req.body.surfacematerial,
               'directionofflow': req.body.directionofflow}},
    {new: true}).exec(function(err, loadingareaproperties) {
      console.log(loadingareaproperties);
      if (err) {
        res.send(err);
      } else if (loadingareaproperties != null) {
        res.json ({ message: 'Loading Area saved' });
      } else {
        res.send('Area not found');
      }
  });
});
// ************ LoadingRacks ****************

api.put('/loadingrackproperties/:id/edit', (req, res) => {
  console.log(req.params.id);

  LoadingRackProperties.findOneAndUpdate({'_id': req.params.id},
    { "$set": {'surfacematerial': req.body.surfacematerial,
               'directionofflow': req.body.directionofflow}},
    {new: true}).exec(function(err, loadingrackproperties) {
      console.log(loadingrackproperties);
      if (err) {
        res.send(err);
      } else if (loadingrackproperties != null) {
        res.json ({ message: 'Loading Rack saved' });
      } else {
        res.send('rack not found');
      }
  });
});

// 'v1'/loadingrackproperties/:id - get loadingrack by id
api.get('/loadingrackproperties/:id', (req, res) => {
  console.log('inside get lrp');
  LoadingRackProperties.find({'facilityinfo': req.params.id}, (err, loadingrackproperties) => {
    if (err) {
      res.send(err);
    }
    res.json(loadingrackproperties);
  });
} );

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
     newLoadingRackProperties.facilityinfo = facilityinfo._id;
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

api.put('/spccplan/:id/edit', (req, res) => {
  console.log(req.params.id);

  SPCCPlan.findOneAndUpdate({'_id': req.params.id},
    { "$set": {'contactinfo.name': req.body.contactinfo.name,
               'contactinfo.phonenumber': req.body.contactinfo.phonenumber,
               'drps1.name': req.body.drps1.name,
               'drps1.title': req.body.drps1.title,
               'drps1.phone': req.body.drps1.phone,
               'drps1.locofplan': req.body.drps1.locofplan,
               'drps2.name': req.body.drps2.name,
               'drps2.title': req.body.drps2.title,
               'drps2.phone': req.body.drps2.phone,
               'drps2.locofplan': req.body.drps2.locofplan,
               'drps3.name': req.body.drps3.name,
               'drps3.title': req.body.drps3.title,
               'drps3.phone': req.body.drps3.phone,
               'drps3.locofplan': req.body.drps3.locofplan,
               'question1.text': req.body.question1.text,
               'question1.answer': req.body.question1.answer,
               'question2.text': req.body.question2.text,
               'question2.answer': req.body.question2.answer,
               'question3.text': req.body.question3.text,
               'question3.answer': req.body.question3.answer,
               'question4.text': req.body.question4.text,
               'question4.answer': req.body.question4.answer,
               'question5.text': req.body.question5.text,
               'question5.answer': req.body.question5.answer}},
    {new: true}).exec(function(err, spccplan) {
      console.log(spccplan);
      if (err) {
        res.send(err);
      } else if (spccplan != null) {
        res.json ({ message: 'SPCCPlan saved' });
      } else {
        res.send('spccplan not found');
      }
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

api.put('/previousdischarge/:id/edit', (req, res) => {
  console.log(req.params.id);

  PreviousDischarge.findOneAndUpdate({'_id': req.params.id},
    { "$set": {'date': req.body.date,
                'material': req.body.material,
                'volume': req.body.volume,
               'location': req.body.location}},
    {new: true}).exec(function(err, previousdischarge) {
      console.log(previousdischarge);
      if (err) {
        res.send(err);
      } else if (previousdischarge != null) {
        res.json ({ message: 'previousdischarge saved' });
      } else {
        res.send('previousdischarge not found');
      }
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

api.put('/tankinfo/:id/edit', (req, res) => {
  console.log(req.params.id);
  TankInfo.findOneAndUpdate({'_id': req.params.id},
    { "$set": {'category': req.body.category,
                'tankdesc': req.body.tankdesc,
                'capacity': req.body.capacity,
               'unit': req.body.unit,
                'petroltype': req.body.petroltype,
                'empty': req.body.empty,
                'shape': req.body.shape,
                'material': req.body.material,
                'heatingcoils': req.body.heatingcoils,
                'eft': req.body.eft,
                'type': req.body.type,
                'partiallyburied': req.body.partiallyburied,
                'registered': req.body.registered}},
    {new: true}).exec(function(err, tankinfo) {
      console.log(tankinfo);
      if (err) {
        res.send(err);
      } else if (tankinfo != null) {
        res.json ({ message: 'tankinfo saved' });
      } else {
        res.send('tankinfo not found');
      }
  });

});
// ********** Containment ******************

api.post('/containment/add/:id', (req, res) => {
  console.log('inside containment post');
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

     newContainment.pipe2properties.valved = req.body.pipe2properties.valved;
     newContainment.pipe2properties.capped = req.body.pipe2properties.capped;
     newContainment.pipe2properties.open = req.body.pipe2properties.open;
     newContainment.pipe2properties.location = req.body.pipe2properties.location;

     newContainment.pipe3properties.valved = req.body.pipe3properties.valved;
     newContainment.pipe3properties.capped = req.body.pipe3properties.capped;
     newContainment.pipe3properties.open = req.body.pipe3properties.open;
     newContainment.pipe3properties.location = req.body.pipe3properties.location;

     newContainment.pipe4properties.valved = req.body.pipe4properties.valved;
     newContainment.pipe4properties.capped = req.body.pipe4properties.capped;
     newContainment.pipe4properties.open = req.body.pipe4properties.open;
     newContainment.pipe4properties.location = req.body.pipe4properties.location;
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

api.put('/containment/:id/edit', (req, res) => {
  console.log(req.params.id);
  Containment.findOneAndUpdate({'_id': req.params.id},
    { "$set": {'doublewall': req.body.doublewall,
                'exists': req.body.exists,
                'material': req.body.material,
                'length': req.body.length,
                'width': req.body.width,
                'height': req.body.height,
                'drainpipesexist': req.body.material,

                'pipe1properties.valved': req.body.pipe1properties.valved,
                'pipe1properties.capped': req.body.pipe1properties.capped,
                'pipe1properties.open': req.body.pipe1properties.open,
                'pipe1properties.location': req.body.pipe1properties.location,

                'pipe2properties.valved': req.body.pipe2properties.valved,
                'pipe2properties.capped': req.body.pipe2properties.capped,
                'pipe2properties.open': req.body.pipe2properties.open,
                'pipe2properties.location': req.body.pipe2properties.location,

                'pipe3properties.valved': req.body.pipe3properties.valved,
                'pipe3properties.capped': req.body.pipe3properties.capped,
                'pipe3properties.open': req.body.pipe3properties.open,
                'pipe3properties.location': req.body.pipe3properties.location,

                'pipe4properties.valved': req.body.pipe4properties.valved,
                'pipe4properties.capped': req.body.pipe4properties.capped,
                'pipe4properties.open': req.body.pipe4properties.open,
                'pipe4properties.location': req.body.pipe4properties.location,

                'registered': req.body.registered}},
    {new: true}).exec(function(err, containment) {
      console.log(containment);
      if (err) {
        res.send(err);
      } else if (containment != null) {
        res.json ({ message: 'containment saved' });
      } else {
        res.send('containment not found');
      }
  });
});

  // ************ PipingInspection ***************

  // add pipinginspection
  //'/v1/facilityinfo/pipinginspection/add/:id''

  api.post('/pipinginspection/add/:id', (req, res) => {
    console.log('inside post pi');
    FacilityInfo.findById(req.params.id, (err, facilityinfo) => {
      console.log(req.params);
      if (err) {
        res.send(err);
      }
      let newPipingInspection = PipingInspection();
       newPipingInspection.date = req.body.date;
       newPipingInspection.questionnumber = req.body.questionnumber;
       newPipingInspection.questiontext = req.body.questiontext;
       newPipingInspection.answer = req.body.answer;
       newPipingInspection.facilityinfo = facilityinfo._id;
       newPipingInspection.save((err, pipinginspectione) => {
         if (err) {
           res.send(err);
         }
         facilityinfo.pipinginspection.push(newPipingInspection);
         facilityinfo.save(err => {
           if (err) {
             res.send(err);

           }
           res.json({ message: 'pipinginspection saved' });
         });
       });
    });
  });

  // get pipinginspection - specific
  // '/v1/pipinginspection/:id - get individual item'
  api.get('/pipinginspection/:id', (req, res) => {
    console.log('inside get pipinginspection');
    PipingInspection.find({facilityinfo: req.params.id}, (err, pipinginspection) => {
      if (err) {
        res.send(err);
      }
      res.json(pipinginspection);
    });
  });

  api.put('/pipinginspection/:id/edit', (req, res) => {
    console.log(req.params.id);

    PipingInspection.findOneAndUpdate({'_id': req.params.id},
      { "$set": {'date': req.body.date,
                  'questionnumber': req.body.questionnumber,
                  'questiontext': req.body.questiontext,
                 'answer': req.body.answer}},
      {new: true}).exec(function(err, pipinginspection) {
        console.log(pipinginspection);
        if (err) {
          res.send(err);
        } else if (pipinginspection != null) {
          res.json ({ message: 'pipinginspection saved' });
        } else {
          res.send('pipinginspection not found');
        }
    });

  });

  // ************ MonthlyInspectionHeader ***************

  // add monthlyinspectionheader
  //'/v1/facilityinfo/monthlyinspectionheader/add/:id''

  api.post('/monthlyinspectionheader/add/:id', (req, res) => {
    console.log('inside post mih');

    FacilityInfo.findById(req.params.id, (err, facilityinfo) => {
      console.log(req.params);
      if (err) {
        res.send(err);
      }
      let newMonthlyInspectionHeader = MonthlyInspectionHeader();
       newMonthlyInspectionHeader.date = req.body.date;
       newMonthlyInspectionHeader.inspectorname = req.body.inspectorname;
       newMonthlyInspectionHeader.tanks = req.body.tanks;
       newMonthlyInspectionHeader.facilityinfo = facilityinfo._id;
       newMonthlyInspectionHeader.save((err, monthlyinspectionheader) => {
         if (err) {
           res.send(err);
         }
         facilityinfo.monthlyinspectionheader.push(newMonthlyInspectionHeader);
         facilityinfo.save(err => {
           if (err) {
             res.send(err);

           }
           res.json({ message: 'monthlyinspectionheader saved' });
         });
       });
    });
  });

  // get monthlyinspectionheader - specific
  // '/v1/monthlyinspectionheader/:id - get individual item'
  api.get('/monthlyinspectionheader/:id', (req, res) => {
    console.log('inside get monthlyinspectionheader');
    MonthlyInspectionHeader.find({facilityinfo: req.params.id}, (err, monthlyinspectionheader) => {
      if (err) {
        res.send(err);
      }
      res.json(monthlyinspectionheader);
    });
  });

// put monthlyinspectionheader
// '/v1/monthlyinspectionheader/:id '
  api.put('/monthlyinspectionheader/:id/edit', (req, res) => {
    console.log(req.params.id);
    MonthlyInspectionHeader.findOneAndUpdate({'_id': req.params.id},
      { "$set": {'date': req.body.date,
                  'inspectorname': req.body.inspectorname,
                  'tanks': req.body.tanks,}},
      {new: true}).exec(function(err, monthlyinspectionheader) {
        console.log(monthlyinspectionheader);
        if (err) {
          res.send(err);
        } else if (monthlyinspectionheader != null) {
          res.json ({ message: 'monthlyinspectionheader saved' });
        } else {
          res.send('monthlyinspectionheader not found');
        }
    });
  });

  // ************ MonthlyInspectionResults ***************

  // add monthlyinspectionresults
  //'/v1/facilityinfo/monthlyinspectionresults/add/:id''

  api.post('/monthlyinspectionresults/add/:id/:headerid', (req, res) => {
    console.log('inside post mih');

    FacilityInfo.findById(req.params.id, (err, facilityinfo) => {
      console.log(req.params);
      if (err) {
        res.send(err);
      }
      let newMonthlyInspectionResults = MonthlyInspectionResults();
       newMonthlyInspectionResults.inspectionheaderID = req.params.headerid;
       newMonthlyInspectionResults.questionnumber = req.body.questionnumber;
       newMonthlyInspectionResults.questiontext = req.body.questiontext;
       newMonthlyInspectionResults.answer = req.body.answer;
       newMonthlyInspectionResults.actionrequired = req.body.actionrequired;
       newMonthlyInspectionResults.comment = req.body.comment;
       newMonthlyInspectionResults.facilityinfo = facilityinfo._id;
       newMonthlyInspectionResults.save((err, monthlyinspectionresults) => {
         if (err) {
           res.send(err);
         }
         facilityinfo.monthlyinspectionresults.push(newMonthlyInspectionResults);
         facilityinfo.save(err => {
           if (err) {
             res.send(err);

           }
           res.json({ message: 'monthlyinspectionresults saved' });
         });
       });
    });
  });

  // get monthlyinspectionresults - specific facility
  // '/v1/monthlyinspectionresults/:id - get individual item'
api.get('/monthlyinspectionresults/:id/:byfacility/:byheader', (req, res) => {

    var byfacility;
    byfacility = req.params.byfacility;

    if ( byfacility == trueInd) {
      console.log('search by facility');
//      getMonthlyResultsByFacility();
      MonthlyInspectionResults.find({facilityinfo: req.params.id}, (err, monthlyinspectionresults) => {
        if (err) {
          res.send(err);
        }
        res.json(monthlyinspectionresults);
      });
    } else {
      console.log('search by header');
      MonthlyInspectionResults.find({inspectionheaderID: req.params.id}, (err, monthlyinspectionresults) => {
        if (err) {
          res.send(err);
        }
        res.json(monthlyinspectionresults);
      });
    }
  });


// put monthlyinspectionresults
// '/v1/monthlyinspectionresults/:id '
  api.put('/monthlyinspectionresults/:id/edit', (req, res) => {
    console.log(req.params.id);
    MonthlyInspectionResults.findOneAndUpdate({'_id': req.params.id},
      { "$set": {'questionnumber': req.body.questionnumber,
                 'questiontext': req.body.questiontext,
                 'answer': req.body.answer,
                 'actionrequired': req.body.actionrequired,
                 'comment': req.body.comment}},
      {new: true}).exec(function(err, monthlyinspectionresults) {
        console.log(monthlyinspectionresults);
        if (err) {
          res.send(err);
        } else if (monthlyinspectionresults != null) {
          res.json ({ message: 'monthlyinspectionresults saved' });
        } else {
          res.send('monthlyinspectionresults not found');
        }
    });
  });

  // ************ AnnualInspectionHeader ***************

  // add annualinspectionheader
  //'/v1/facilityinfo/annualinspectionheader/add/:id''

  api.post('/annualinspectionheader/add/:id', (req, res) => {
    console.log('inside post aih');

    FacilityInfo.findById(req.params.id, (err, facilityinfo) => {
      console.log(req.params);
      if (err) {
        res.send(err);
      }
      let newAnnualInspectionHeader = AnnualInspectionHeader();
       newAnnualInspectionHeader.date = req.body.date;
       newAnnualInspectionHeader.inspectorname = req.body.inspectorname;
       newAnnualInspectionHeader.tanks = req.body.tanks;
       newAnnualInspectionHeader.facilityinfo = facilityinfo._id;
       newAnnualInspectionHeader.save((err, monthlyinspectionheader) => {
         if (err) {
           res.send(err);
         }
         facilityinfo.annualinspectionheader.push(newAnnualInspectionHeader);
         facilityinfo.save(err => {
           if (err) {
             res.send(err);

           }
           res.json({ message: 'annualinspectionheader saved' });
         });
       });
    });
  });

  // get annualinspectionheader - specific
  // '/v1/annualinspectionheader/:id - get individual item'
  api.get('/annualinspectionheader/:id', (req, res) => {
    console.log('inside get annualinspectionheader');
  AnnualInspectionHeader.find({facilityinfo: req.params.id}, (err, annualinspectionheader) => {
      if (err) {
        res.send(err);
      }
      res.json(annualinspectionheader);
    });
  });

// put annualinspectionheader
// '/v1/annualinspectionheader/:id '
  api.put('/annualinspectionheader/:id/edit', (req, res) => {
    console.log(req.params.id);
    AnnualInspectionHeader.findOneAndUpdate({'_id': req.params.id},
      { "$set": {'date': req.body.date,
                  'inspectorname': req.body.inspectorname,
                  'tanks': req.body.tanks,}},
      {new: true}).exec(function(err, annualinspectionheader) {
        console.log(annualinspectionheader);
        if (err) {
          res.send(err);
        } else if (annualinspectionheader != null) {
          res.json ({ message: 'annualinspectionheader saved' });
        } else {
          res.send('annualinspectionheader not found');
        }
    });
  });

  // ************ AnnualInspectionResults ***************

  // add annualinspectionresults
  //'/v1/facilityinfo/annualinspectionresults/add/:id''

  api.post('/annualinspectionresults/add/:id/:headerid', (req, res) => {
    console.log('inside post mih');

    FacilityInfo.findById(req.params.id, (err, facilityinfo) => {
      console.log(req.params);
      if (err) {
        res.send(err);
      }
      let newAnnualInspectionResults = AnnualInspectionResults();
       newAnnualInspectionResults.inspectionheaderID = req.params.headerid;
       newAnnualInspectionResults.questionnumber = req.body.questionnumber;
       newAnnualInspectionResults.questiontext = req.body.questiontext;
       newAnnualInspectionResults.answer = req.body.answer;
       newAnnualInspectionResults.actionrequired = req.body.actionrequired;
       newAnnualInspectionResults.comment = req.body.comment;
       newAnnualInspectionResults.facilityinfo = facilityinfo._id;
       newAnnualInspectionResults.save((err, annualinspectionresults) => {
         if (err) {
           res.send(err);
         }
         facilityinfo.annualinspectionresults.push(newAnnualInspectionResults);
         facilityinfo.save(err => {
           if (err) {
             res.send(err);

           }
           res.json({ message: 'annualinspectionresults saved' });
         });
       });
    });
  });

  // get annualinspectionresults - specific facility
  // '/v1/annualinspectionresults/:id - get individual item'

api.get('/annualinspectionresults/:id/:byfacility/:byheader', (req, res) => {

      var byfacility;
      byfacility = req.params.byfacility;

      if ( byfacility == trueInd) {
        console.log('search by facility');
  //      get AnnualResultsByFacility();
        AnnualInspectionResults.find({facilityinfo: req.params.id}, (err, annualinspectionresults) => {
          if (err) {
            res.send(err);
          }
          res.json(annualinspectionresults);
        });
      } else {
        console.log('search by header');
        AnnualInspectionResults.find({inspectionheaderID: req.params.id}, (err, annualinspectionresults) => {
          if (err) {
            res.send(err);
          }
          res.json(annualinspectionresults);
        });
      }
    });

// put annualinspectionresults
// '/v1/annualinspectionresults/:id '
  api.put('/annualinspectionresults/:id/edit', (req, res) => {
    console.log(req.params.id);
    AnnualInspectionResults.findOneAndUpdate({'_id': req.params.id},
      { "$set": {'questionnumber': req.body.questionnumber,
                 'questiontext': req.body.questiontext,
                 'answer': req.body.answer,
                 'actionrequired': req.body.actionrequired,
                 'comment': req.body.comment}},
      {new: true}).exec(function(err, annualinspectionresults) {
        console.log(annualinspectionresults);
        if (err) {
          res.send(err);
        } else if (annualinspectionresults != null) {
          res.json ({ message: 'annualinspectionresults saved' });
        } else {
          res.send('annualinspectionresults not found');
        }
    });
  });

return api;

}
