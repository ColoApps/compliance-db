import mongoose from 'mongoose';
import tankinfo from './tankinfo';
let Schema = mongoose.Schema

let DrainPipePropertiesSchema = new Schema ({
  valved: Boolean,
  capped: Boolean,
  open: Boolean,
  location: String,
  tankinfo: {type: Schema.Types.ObjectId, ref: 'TankInfo'}
});

module.exports = mongoose.model('DrainPipeProperties', DrainPipePropertiesSchema);
