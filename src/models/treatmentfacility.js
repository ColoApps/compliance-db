import mongoose from 'mongoose';
let Schema = mongoose.Schema;

let TreatmentFacilitySchema = new Schema ({
  type: String
});

module.exports = mongoose.model('TreatmentFacility', TreatmentFacilitySchema);
