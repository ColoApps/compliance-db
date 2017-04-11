import mongoose from 'mongoose';
import spccplan from './spccplan';
let Schema = mongoose.Schema;

let tankinfoSchema = new Schema ({
  category: String,
  tankdesc: String,
  capacity: Number,
  unit: String,
  petroltype: String,
  empty: Boolean,
  shape: String,
  material: String,
  heatingcoils: Boolean,
  effluenttreatment: {
    eft: Boolean,
    type: String
  },
  partiallyburied: Boolean,
  containment: {
    doublewall: Boolean,
    exists: Boolean,
    material: String,
    length: Number,
    width: Number,
    height: Number,
    drainpipesexist: Boolean,
  },
  drainpipeproperties: [{type: Schema.Types.ObjectId, ref: 'DrainPipeProperties'}],
  registered: Boolean

})
