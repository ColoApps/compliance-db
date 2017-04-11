import mongoose from 'mongoose';
import spccplan from './spccplan';
let Schema = mongoose.Schema;

let LoadingRacksSchema = new Schema ({
  properties: [{type: Schema.Types.ObjectId, ref: 'LoadingRackProperties'}],
})

module.exports = mongoose.model('LoadingRacks', LoadingRacksSchema);
