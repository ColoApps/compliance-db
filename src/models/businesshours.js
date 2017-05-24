import mongoose from 'mongoose';
let Schema = mongoose.Schema;

let BusinessHoursSchema = new Schema ({
  schedule: String,
  beghours: String,
  endhours: String
});

module.exports = mongoose.model('BusinessHours', BusinessHoursSchema);
