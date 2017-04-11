import mongoose from 'mongoose';
let Schema = mongoose.Schema;

let LoadingAreaProperties = new Schema ({
  surfacematerial: String,
  directionofflow: String,
  properties: {type: Schema.Types.ObjectId, ref: 'LoadingArea'}
});

module.exports = mongoose.model('LoadingArea', LoadingAreaProperties);
