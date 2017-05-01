import mongoose from 'mongoose';
let Schema = mongoose.Schema;

let AnnualQuestionTextSchema = new Schema ({
  questionnumber: Number,
  question: String
});

module.exports = mongoose.model('AnnualQuestionText', AnnualQuestionTextSchema);
