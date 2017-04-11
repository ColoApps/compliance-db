import mongoose from 'mongoose';
let Schema = mongoose.Schema;

let TankCapacitySchema = new Schema ({
  amount: Number,
  unit: String
});

module.exports = mongoose.model('TankCapacity', TankCapacitySchema);
