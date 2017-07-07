import mongoose from 'mongoose';
let Schema = mongoose.Schema;

let SecuritySchema = new Schema ({
  twentyfourhours: Boolean,
  schedule: String,
  beghours: String,
  endhours: String,
  facilityinfo: {type: Schema.Types.ObjectId, ref: 'FacilityInfo'}
});

module.exports = mongoose.model('Security', SecuritySchema);
