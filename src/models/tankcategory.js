import mongoose from 'mongoose';
let Schema = mongoose.Schema;

let TankCategorySchema = new Schema({
  category: String
});

module.exports = mongoose.model('TankCategory', TankCategorySchema);
