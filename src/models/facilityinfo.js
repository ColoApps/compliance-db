import mongoose from 'mongoose';
let Schema = mongoose.Schema;

let FacilityInfoSchema = new Schema ({

  facilityname: String,
  facilityaddress: {
    street: String,
    city: String,
    state: String,
    zipcode: String
  },
  facilityowner: String,
  owneraddress: {
    street: String,
    city: String,
    state: String,
    zipcode: String
  },

  facilitydescription: String,
  geometry: {
    type: { type: String, default: 'Point' },
    coordinates: {
      lat: Number,
      long: Number
    }
},
  EPARegion: String,
  stateoverride: Boolean,
  statetext: String,

  businesstype: String,
  businesshours: [{type: Schema.Types.ObjectId, ref: 'BusinessHours'}],

  securityexists: Boolean,

  security: [{type: Schema.Types.ObjectId, ref: 'Security'}],

  storagelocation: [{type: Schema.Types.ObjectId, ref: 'StorageLocation'}],

  tankinfo: [{type: Schema.Types.ObjectId, ref: 'TankInfo'}],

  containment: [{type: Schema.Types.ObjectId, ref: 'Containment'}],

  loadingareaexists: Boolean,
  loadingareaproperties: [{type: Schema.Types.ObjectId, ref: 'LoadingArea'}],

  loadingracksexists: Boolean,
  loadingrackproperties: [{type: Schema.Types.ObjectId, ref: 'LoadingRacks'}],

  loadingoperations: {
    exists: Boolean,
    specific: Boolean,
    procedures: String
  },

  previousdischargeexists: Boolean,
  previousdischarge: [{type: Schema.Types.ObjectId, ref: 'PreviousDischarge'}],

  spccplan: [{type: Schema.Types.ObjectId, ref: 'TankInfo'}],

  pipinginspection: [{type: Schema.Types.ObjectId, ref: 'PipingQuestion'}],

  monthlyinspectionheader: [{type: Schema.Types.ObjectId, ref: 'MonthlyInspectionHeader'}],
  monthlyinspectionresults: [{type: Schema.Types.ObjectId, ref: 'MonthlyInspectionResults'}],

  annualinspectionheader: [{type: Schema.Types.ObjectId, ref: 'AnnualInspectionHeader'}],
  annualinspectionresults: [{type: Schema.Types.ObjectId, ref: 'AnnualInspectionResults'}]

})

module.exports = mongoose.model('FacilityInfo', FacilityInfoSchema);
