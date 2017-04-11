import mongoose from 'mongoose';
import spccplan from './spccplan';
let Schema = mongoose.Schema;

let LoadingAreaSchema = new Schema ({
  properties: {type: Schema.Types.ObjectId, ref: 'SPCCPlan'}
});

module.exports = mongoose.model('LoadingArea', LoadingAreaSchema);
