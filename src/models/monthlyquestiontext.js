import mongoose from 'mongoose';
let Schema = mongoose.Schema;

let MonthlyQuestionTextSchema = new Schema ({
  questionnumber: Number,
  question: String
});

module.exports = mongoose.model('MonthlyQuestionText', MonthlyQuestionTextSchema);
