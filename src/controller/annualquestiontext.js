import mongoose from 'mongoose';
import { Router } from 'express';
import AnnualQuestionText from '../models/annualquestiontext';
import config from '../config';

export default ({config, db}) => {
  let api = Router();

  // 'v1/annualquestiontext/add'
  api.post('/add', (req, res) => {
    console.log('inside pqt post');
    let newAnnualQuestionText = new AnnualQuestionText();
    newAnnualQuestionText.questionnumber = req.body.questionnumber;
    newAnnualQuestionText.question = req.body.question;

    newAnnualQuestionText.save(err => {
      if (err) {
        res.send(err);
      }
      res.json({ message: "Question saved successfully."});
    });
  });

  //'/v1/annualquestiontext -read'
  api.get('/', (req, res) => {
    AnnualQuestionText.find({}, (err, annualquestiontext) => {
      if (err) {
        res.send(err);
      }
      res.json(annualquestiontext);
    });
  });

// '/v1/annualquestiontext - get individual item'
api.get('/:id', (req, res) => {
  AnnualQuestionText.findById(req.params.id, (err, annualquestiontext) => {
    if (err) {
      res.send(err);
    }
    res.json(annualquestiontext);
  });
});

//'/v1/annualquestiontext - put (update) and item'
api.put('/:id/edit', (req, res) => {
  AnnualQuestionText.findById(req.params.id, (err, annualquestiontext) => {
    if (err) {
      res.send(err);
    }
    annualquestiontext.questionnumber = req.body.questionnumber;
    annualquestiontext.question = req.body.question;
    annualquestiontext.save(err => {
      if (err) {
        res.send(err);
      }
      res.json({ message: "questiontext updated successfully."});
    });
  });
});

//'v1/annualquestiontext = delete an item'
api.delete('/:id', (req, res) => {
  AnnualQuestionText.remove({
    _id: req.params.id
  },(err, annualquestiontext) => {
    if (err) {
      res.send(err);
    }
    res.json({ message: "question deleted"});
  });
});
return api;

}
