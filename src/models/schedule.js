import mongoose from 'mongoose';
let Schema = mongoose.Schema;

let ScheduleSchema = new Schema ({
  text: String
})

module.exports = mongoose.model('Schedule', ScheduleSchema);
