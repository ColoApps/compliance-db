import mongoose from 'mongoose';
let Schema = mongoose.Schema;

let TankDescSchema = new Schema ({
  text: String
});

module.exports = mongoose.model('TankDesc', TankDescSchema);
