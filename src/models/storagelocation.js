import mongoose from 'mongoose';
let Schema = mongoose.Schema;

let StorageLocationSchema = new Schema ({
  name: String,
  description: String,
  comment: String,
  facilityinfo: {type: Schema.Types.ObjectId, ref: 'FacilityInfo'}
});

module.exports = mongoose.model('StorageLocation', StorageLocationSchema);
