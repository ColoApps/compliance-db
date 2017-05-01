import mongoose from 'mongoose';
import spccplan from './facilityinfo';
let Schema = mongoose.Schema;

let PipingQuestionSchema = new Schema({
  date: String,
  questionnumber: Number,
  questiontext: String,
  answer: Boolean,
  facilityinfo: {type: Schema.Types.ObjectId, ref: 'FacilityInfo'}
});

module.exports = mongoose.model('PipingQuestion', PipingQuestionSchema);
