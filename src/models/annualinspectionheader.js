import mongoose from 'mongoose';
import spccplan from './facilityinfo';
let Schema = mongoose.Schema;

let AnnualInpsectionHeaderSchema = new Schema({
  date: String,
  inspectorname: String,
  tanks: String,
  inspectionID: String,
  facilityinfo: {type: Schema.Types.ObjectId, ref: 'FacilityInfo'}
});

module.exports = mongoose.model('AnnualInspectionHeader', AnnualInspectionHeaderSchema);
