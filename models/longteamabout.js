const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const shortaboutSchema = new Schema({
  aboutteamlongtitle: { type: String, required: true },
  aboutteamlong: { type: String, required: true },
  aboutteamlongimg: { type: String, required: true },
});

module.exports = mongoose.model('longteamabout', shortaboutSchema);
