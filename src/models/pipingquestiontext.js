import mongoose from 'mongoose';
let Schema = mongoose.Schema;

let PipingQuestionSchema = new Schema ({
  questionnumber: Number,
  question: String
});

module.exports = mongoose.model('PipingQuestion', PipingQuestionSchema);
