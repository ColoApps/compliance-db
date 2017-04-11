import mongoose from 'mongoose';
let Schema = mongoose.Schema;

let PetrolTypesSchema = new Schema ({
  type: String
});

module.exports = mongoose.model('PetrolTypes', PetrolTypesSchema);
