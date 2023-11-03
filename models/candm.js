const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const shortaboutSchema = new Schema({
  CandMname: { type: String, required: true },
  CandMposition: { type: String, required: true },
  CandMfblink: { type: String, required: true },
  CandMinstalink: { type: String, required: true },
  CandMimg: { type: String, required: true },
});

module.exports = mongoose.model("candm", shortaboutSchema);
