import mongoose from 'mongoose';
import facilityinfo from './facilityinfo';
let Schema = mongoose.Schema;

let TankInfoSchema = new Schema ({
  facilityinfo: {type: Schema.Types.ObjectId, ref: 'FacilityInfo'},
  category: String,
  tankdesc: String,
  capacity: Number,
  unit: String,
  petroltype: String,
  empty: Boolean,
  shape: String,
  material: String,
  heatingcoils: Boolean,
  eft: Boolean,
  type: String,
  partiallyburied: Boolean,
  registered: Boolean

})

module.exports = mongoose.model('TankInfo', TankInfoSchema);
