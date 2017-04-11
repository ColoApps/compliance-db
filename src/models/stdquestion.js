import mongoose from 'mongoose';
import spccplan from './spccplan';
let Schema = mongoose.Schema;

let StdQuestionSchema = new Schema({
  questionnumber: Number,
  questiontext: String,
  answer: Boolean,
  spccplan: {type: Schema.Types.ObjectId, ref: 'SPCCPlan'}
});

module.exports = mongoose.model('StdQuestion', StdQuestionSchema);
