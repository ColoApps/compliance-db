import mongoose from 'mongoose';
import spccplan from './facilityinfo';
let Schema = mongoose.Schema;

let MonthlyInpsectionHeaderSchema = new Schema({
  date: String,
  inspectorname: String,
  tanks: String,
  inspectionID: String,
  facilityinfo: {type: Schema.Types.ObjectId, ref: 'FacilityInfo'}
});

module.exports = mongoose.model('MonthlyInspectionHeader', MonthlyInspectionHeaderSchema);
