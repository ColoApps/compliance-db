import mongoose from 'mongoose';
import spccplan from './facilityinfo';
let Schema = mongoose.Schema;

let MonthlyInspectionResultsSchema = new Schema({
  inspectionheaderID: String,
  questionnumber: String,
  questiontext: String,
  answer: Boolean,
  actionrequired: Boolean,
  comment: String,
  facilityinfo: {type: Schema.Types.ObjectId, ref: 'FacilityInfo'}
});

module.exports = mongoose.model('MonthlyInspectionResults', MonthlyInspectionResultsSchema);
