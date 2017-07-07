import mongoose from 'mongoose';
import DrP from './drp';
import FacilityInfo from './facilityinfo';
let Schema = mongoose.Schema;

let SPCCPlanSchema = new Schema({
  contactinfo: {
    name: String,
    phonenumber: String
  },
  facilityinfo: {type: Schema.Types.ObjectId, ref: 'FacilityInfo'},

  drps1:  {
    name: String,
    title: String,
    phone: String,
    alternate: Boolean
  },
  drps2:  {
    name: String,
    title: String,
    phone: String,
    alternate: Boolean
  },
  drps3:  {
    name: String,
    title: String,
    phone: String,
    alternate: Boolean
  },

  locofplan1: String,
  locofplan2: String,

  totalsitecapacity: Number,

  question1: {
    "text": String,
    "answer": Boolean
  },
  question2: {
    "text": String,
    "answer": Boolean
  },
  question3: {
    "text": String,
    "answer": Boolean
  },
  question4: {
    "text": String,
    "answer": Boolean
  },
 question5: {
    "text": String,
    "answer": Boolean
  }
});
module.exports = mongoose.model('SPCCPlan', SPCCPlanSchema);
