import mongoose from 'mongoose';
import SPCCPlan from './spccplan';
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
    coordinates: [Number]
},
  businesstype: String,
  beghours: String,
  endhours: String,
  schedule: String,
  security: {
    twentyfourhours: Boolean,
    beghours: String,
    endhours: String,
    days: String
  },

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
