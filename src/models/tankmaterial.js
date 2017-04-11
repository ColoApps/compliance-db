import mongoose from 'mongoose';
let Schema = mongoose.Schema;

let TankMaterialSchema = new Schema ({
  type: String
});

module.exports = mongoose.model('TankMaterial', TankMaterialSchema);
