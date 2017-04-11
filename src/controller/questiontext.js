import mongoose from 'mongoose';
import { Router } from 'express';
import QuestionText from '../models/questiontext';
import config from '../config';

export default ({config, db}) => {
  let api = Router();

  // 'v1/questiontext/add'
  api.post('/add', (req, res) => {
    console.log('inside qt post');
    let newQuestionText = new QuestionText();
    newQuestionText.question = req.body.question;

    newQuestionText.save(err => {
      if (err) {
        res.send(err);
      }
      res.json({ message: "Question saved successfully."});
    });
  });

  //'/v1/questiontext -read'
  api.get('/', (req, res) => {
    QuestionText.find({}, (err, surfacematerials) => {
      if (err) {
        res.send(err);
      }
      res.json(surfacematerials);
    });
  });

// '/v1/questiontext - get individual item'
api.get('/:id', (req, res) => {
  QuestionText.findById(req.params.id, (err, questiontext) => {
    if (err) {
      res.send(err);
    }
    res.json(questiontext);
  });
});

//'/v1/questiontext - put (update) and item'
api.put('/:id', (req, res) => {
  QuestionText.findById(req.params.id, (err, questiontext) => {
    if (err) {
      res.send(err);
    }
    questiontext.question = req.body.question;
    questiontext.save(err => {
      if (err) {
        res.send(err);
      }
      res.json({ message: "questiontext updated successfully."});
    });
  });
});

//'v1/questiontext = delete an item'
api.delete('/:id', (req, res) => {
  QuestionText.remove({
    _id: req.params.id
  },(err, questiontext) => {
    if (err) {
      res.send(err);
    }
    res.json({ message: "question deleted"});
  });
});
return api;

}
