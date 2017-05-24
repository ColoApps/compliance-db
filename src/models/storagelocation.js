import mongoose from 'mongoose';
let Schema = mongoose.Schema;

let StorageLocationSchema = new Schema ({
  name: String,
  description: String,
  comment: String,
  directionofflow: String,
  surfacematerial: String,
  lights: Boolean,
  lightloc: String,
  fencing: Boolean,
  fencingloc: String,
  camera: Boolean,
  cameraloc: String,
  facilityinfo: {type: Schema.Types.ObjectId, ref: 'FacilityInfo'}
});

module.exports = mongoose.model('StorageLocation', StorageLocationSchema);
