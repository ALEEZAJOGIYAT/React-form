const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  email: String,
  agency: String,
  name: String,
  identiy: String,
  descr: String,
  rfpDate: Date,
  lead: String,
  subDate: String,
  estTotalVal: String,
  identifiedSubs: String,
  completed: String,
});

const user = mongoose.model("users", userSchema);

module.exports = user;
