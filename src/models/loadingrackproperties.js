import mongoose from 'mongoose';
let Schema = mongoose.Schema;

let LoadingRackPropertiesSchema = new Schema ({
  surfacematerial: String,
  directionofflow: String,
  properties: {type: Schema.Types.ObjectId, ref: 'loadingracks'}
});

module.exports = mongoose.model('LoadingRackProperties', LoadingRackPropertiesSchema);
