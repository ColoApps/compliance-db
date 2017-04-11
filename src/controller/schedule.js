import mongoose from 'mongoose';
import { Router } from 'express';
import Schedule from '../models/schedule';
import config from '../config';

export default ({config, db}) => {
  let api = Router();

  // 'v1/schedule/add'
  api.post('/add', (req, res) => {
    console.log('inside post');
    let newSchedule = new Schedule();
    newSchedule.text = req.body.text;

    newSchedule.save(err => {
      if (err) {
        res.send(err);
      }
      res.json({ message: "Schedule saved successfully."});
    });
  });

  //'/v1/schedules -read'
  api.get('/', (req, res) => {
    Schedule.find({}, (err, schedules) => {
      if (err) {
        res.send(err);
      }
      res.json(schedules);
    });
  });

// '/v1/schedule - get individual item'
api.get('/:id', (req, res) => {
  Schedule.findById(req.params.id, (err, schedule) => {
    if (err) {
      res.send(err);
    }
    res.json(schedule);
  });
});

//'/v1/schedule - put (update) and item'
api.put('/:id', (req, res) => {
  Schedule.findById(req.params.id, (err, schedule) => {
    if (err) {
      res.send(err);
    }
    schedule.text = req.body.text;
    schedule.save(err => {
      if (err) {
        res.send(err);
      }
      res.json({ message: "schedule updated successfully."});
    });
  });
});

//'v1/schedule = delete an item'
api.delete('/:id', (req, res) => {
  Schedule.remove({
    _id: req.params.id
  },(err, schedule) => {
    if (err) {
      res.send(err);
    }
    res.json({ message: "schedule deleted"});
  });
});
return api;

}
