import mongoose from 'mongoose';
import SPCCPlan from './spccplan';
let Schema = mongoose.Schema;

let DRPSchema = new Schema({
  name: String,
  title: String,
  phone: String,
  locofplan: String,
  alternate: Boolean,
  spccplan: {type: Schema.Types.ObjectId, ref: 'SPCCPlan'}
});

module.exports = mongoose.model('DrP', DRPSchema);
