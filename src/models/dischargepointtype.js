import mongoose from 'mongoose';
let Schema = mongoose.Schema;

let DischargePointTypeSchema = new Schema ({
  type: String
});

module.exports = mongoose.model('DischargePointType', DischargePointTypeSchema);
