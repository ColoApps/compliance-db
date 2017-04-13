import mongoose from 'mongoose';
import facilityinfo from './facilityinfo';
let Schema = mongoose.Schema;

let ContainmentSchema = new Schema ({
  
  facilityinfo: {type: Schema.Types.ObjectId, ref: 'FacilityInfo'},
  doublewall: Boolean,
  exists: Boolean,
  material: String,
  length: Number,
  width: Number,
  height: Number,

  drainpipesexist: Boolean,
  pipe1properties: {
    valved: Boolean,
    capped: Boolean,
    open: Boolean,
    location: String
  },
  pipe2properties: {
    valved: Boolean,
    capped: Boolean,
    open: Boolean,
    location: String
  },
  pipe3properties: {
    valved: Boolean,
    capped: Boolean,
    open: Boolean,
    location: String
  },
  pipe4properties: {
    valved: Boolean,
    capped: Boolean,
    open: Boolean,
    location: String
  }

})

module.exports = mongoose.model('Containment', ContainmentSchema);
