import mongoose from 'mongoose';
import spccplan from './facilityinfo';
let Schema = mongoose.Schema;

let AnnualInspectionResultsSchema = new Schema({
  inspectionID: String,
  questionnumber: String,
  questiontext: String,
  answer: Boolean,
  comment: String,
  facilityinfo: {type: Schema.Types.ObjectId, ref: 'FacilityInfo'}
});

module.exports = mongoose.model('AnnualInspectionResults', AnnualInspectionResultsSchema);
