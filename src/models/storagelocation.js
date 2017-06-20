import mongoose from 'mongoose';
let Schema = mongoose.Schema;

let StorageLocationSchema = new Schema ({
  name: String,
  description: String,
  comment: String,
  lights: Boolean,
  lightloc: String,
  material: Boolean,
  materialtype: String,
  facilityinfo: {type: Schema.Types.ObjectId, ref: 'FacilityInfo'}
});

module.exports = mongoose.model('StorageLocation', StorageLocationSchema);
