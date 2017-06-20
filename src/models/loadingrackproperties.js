import mongoose from 'mongoose';
let Schema = mongoose.Schema;

let LoadingRackPropertiesSchema = new Schema ({
  surfacematerial: String,
  directionofflow: String,
  containmentflag: Boolean,
  containment:{type: Schema.Types.ObjectId, ref: "Containment"},
  facilityinfo: {type: Schema.Types.ObjectId, ref: 'FacilityInfo'}
});

module.exports = mongoose.model('LoadingRackProperties', LoadingRackPropertiesSchema);
