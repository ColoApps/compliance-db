import mongoose from 'mongoose';
let Schema = mongoose.Schema;

let ShapeSchema = new Schema ({
  shape: String
});

module.exports = mongoose.model('Shape', ShapeSchema);
