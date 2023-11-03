const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const shortaboutSchema = new Schema({
  shorttitle: { type: String, required: true },
  shortabout: { type: String, required: true },
  aboutimg: { type: String, required: true },
});

module.exports = mongoose.model('khukurifc', shortaboutSchema);
