import mongoose from 'mongoose';
let Schema = mongoose.Schema;

let PipingQuestionTextSchema = new Schema ({
  questionnumber: Number,
  question: String
});

module.exports = mongoose.model('PipingQuestionText', PipingQuestionTextSchema);
