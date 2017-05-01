import mongoose from 'mongoose';
import { Router } from 'express';
import MonthlyQuestionText from '../models/monthlyquestiontext';
import config from '../config';

export default ({config, db}) => {
  let api = Router();

  // 'v1/monthlyquestiontext/add'
  api.post('/add', (req, res) => {
    console.log('inside pqt post');
    let newMonthlyQuestionText = new MonthlyQuestionText();
    newMonthlyQuestionText.questionnumber = req.body.questionnumber;
    newMonthlyQuestionText.question = req.body.question;

    newMonthlyQuestionText.save(err => {
      if (err) {
        res.send(err);
      }
      res.json({ message: "Question saved successfully."});
    });
  });

  //'/v1/monthlyquestiontext -read'
  api.get('/', (req, res) => {
    MonthlyQuestionText.find({}, (err, monthlyquestiontext) => {
      if (err) {
        res.send(err);
      }
      res.json(monthlyquestiontext);
    });
  });

// '/v1/monthlyquestiontext - get individual item'
api.get('/:id', (req, res) => {
  MonthlyQuestionText.findById(req.params.id, (err, monthlyquestiontext) => {
    if (err) {
      res.send(err);
    }
    res.json(monthlyquestiontext);
  });
});

//'/v1/monthlyquestiontext - put (update) and item'
api.put('/:id/edit', (req, res) => {
  MonthlyQuestionText.findById(req.params.id, (err, monthlyquestiontext) => {
    if (err) {
      res.send(err);
    }
    monthlyquestiontext.questionnumber = req.body.questionnumber;
    monthlyquestiontext.question = req.body.question;
    monthlyquestiontext.save(err => {
      if (err) {
        res.send(err);
      }
      res.json({ message: "questiontext updated successfully."});
    });
  });
});

//'v1/monthlyquestiontext = delete an item'
api.delete('/:id', (req, res) => {
  MonthlyQuestionText.remove({
    _id: req.params.id
  },(err, monthlyquestiontext) => {
    if (err) {
      res.send(err);
    }
    res.json({ message: "question deleted"});
  });
});
return api;

}
