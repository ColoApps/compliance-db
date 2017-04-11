import mongoose from 'mongoose';
let Schema = mongoose.Schema;

let PreviousDischargeSchema = new Schema ({
    date: String,
    material: String,
    volume: String,
    location: String,
    facilityinfo: [{type: Schema.Types.ObjectId, ref: 'previousdischargeproperties'}]
});

module.exports = mongoose.model('PreviousDischarge', PreviousDischargeSchema);
