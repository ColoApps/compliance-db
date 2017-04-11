import mongoose from 'mongoose';
let Schema = mongoose.Schema;

let SurfaceMaterialSchema = new Schema ({
  material: String
});

module.exports = mongoose.model('SurfaceMaterial', SurfaceMaterialSchema);
