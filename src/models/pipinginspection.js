import mongoose from 'mongoose';
import spccplan from './facilityinfo';
let Schema = mongoose.Schema;

let PipingInspectionSchema = new Schema({
  date: String,
  questionnumber: Number,
  questiontext: String,
  answer: Boolean,
  facilityinfo: {type: Schema.Types.ObjectId, ref: 'FacilityInfo'}
});

module.exports = mongoose.model('PipingInspection', PipingInspectionSchema);
