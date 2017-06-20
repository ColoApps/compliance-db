import express from 'express';
import config from '../config';
import middleware from '../middleware';
import initializeDb from '../db';
import schedule from '../controller/schedule';
import questiontext from '../controller/questiontext';
import pipingquestiontext from '../controller/pipingquestiontext';
import monthlyquestiontext from '../controller/monthlyquestiontext';
import annualquestiontext from '../controller/annualquestiontext';
import tankdescription from '../controller/tankdescription';
import tankcapacity from '../controller/tankcapacity';
import petroltypes from '../controller/petroltypes';
import shape from '../controller/shape';
import tankmaterial from '../controller/tankmaterial';
import treatmentfacility from '../controller/treatmentfacility';
import surfacematerial from '../controller/surfacematerial';
import containmentmaterial from '../controller/containmentmaterial';
import tankcategory from '../controller/tankcategory';
import facilityinfo from '../controller/facilityinfo';
import dischargepointtype from '../controller/dischargepointtype';
import account from '../controller/account';

let router = express();

// connect to db
initializeDb(db => {

  // internal middleware
  router.use(middleware({ config, db }));

  // api routes v1 (/v1)

  router.use('/schedule', schedule({ config, db }));
  router.use('/questiontext', questiontext({ config, db }));
  router.use('/pipingquestiontext', pipingquestiontext({ config, db }));
  router.use('/monthlyquestiontext', monthlyquestiontext({ config, db }));
  router.use('/annualquestiontext', annualquestiontext({ config, db }));
  router.use('/tankdescription', tankdescription({ config, db }));
  router.use('/tankcapacity', tankcapacity({ config, db }));
  router.use('/petroltypes', petroltypes({ config, db }));
  router.use('/shape', shape({ config, db }));
  router.use('/tankmaterial', tankmaterial({ config, db }));
  router.use('/treatmentfacility', treatmentfacility({ config, db }));
  router.use('/surfacematerial', surfacematerial({ config, db }));
  router.use('/containmentmaterial', containmentmaterial({ config, db }));
  router.use('/tankcategory', tankcategory({ config, db }));
  router.use('/account', account({ config, db}));
  router.use('/facilityinfo', facilityinfo({ config, db}));
  router.use('/dischargepointtype', dischargepointtype({ config, db }));
});

export default router;
