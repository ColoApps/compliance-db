import mongoose from 'mongoose';
let Schema = mongoose.Schema;

let QuestionTextSchema = new Schema ({
  question: String
});

module.exports = mongoose.model('QuestionText', QuestionTextSchema);
