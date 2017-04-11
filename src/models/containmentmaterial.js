import mongoose from 'mongoose';
let Schema = mongoose.Schema;

let ContainmentMaterialSchema = new Schema ({
  material: String
});

module.exports = mongoose.model('ContainmentMaterial', ContainmentMaterialSchema);
