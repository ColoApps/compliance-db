import mongoose from 'mongoose';
import { Router } from 'express';
import PipingQuestionText from '../models/pipingquestiontext';
import config from '../config';

import { authenticate } from '../middleware/authMiddleware';

export default ({config, db}) => {
  let api = Router();

  // 'v1/pipingquestiontext/add'
  api.post('/add', (req, res) => {
    console.log('inside pqt post');
    let newPipingQuestionText = new PipingQuestionText();
    newPipingQuestionText.questionnumber = req.body.questionnumber;
    newPipingQuestionText.question = req.body.question;

    newPipingQuestionText.save(err => {
      if (err) {
        res.send(err);
      }
      res.json({ message: "Question saved successfully."});
    });
  });

  //'/v1/pipingquestiontext -read'
  api.get('/', (req, res) => {
    PipingQuestionText.find({}, (err, pipingquestiontext) => {
      if (err) {
        res.send(err);
      }
      res.json(pipingquestiontext);
    });
  });

// '/v1/pipingquestiontext - get individual item'
api.get('/:id', (req, res) => {
  PipingQuestionText.findById(req.params.id, (err, pipingquestiontext) => {
    if (err) {
      res.send(err);
    }
    res.json(pipingquestiontext);
  });
});

//'/v1/pipingquestiontext - put (update) and item'
api.put('/:id/edit', (req, res) => {
  PipingQuestionText.findById(req.params.id, (err, pipingquestiontext) => {
    if (err) {
      res.send(err);
    }
    pipingquestiontext.questionnumber = req.body.questionnumber;
    pipingquestiontext.question = req.body.question;
    pipingquestiontext.save(err => {
      if (err) {
        res.send(err);
      }
      res.json({ message: "questiontext updated successfully."});
    });
  });
});

//'v1/pipingquestiontext = delete an item'
api.delete('/:id', (req, res) => {
  PipingQuestionText.remove({
    _id: req.params.id
  },(err, pipingquestiontext) => {
    if (err) {
      res.send(err);
    }
    res.json({ message: "question deleted"});
  });
});
return api;

}
