const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const shortaboutSchema = new Schema({
    aboutfclongtitle: { type: String, required: true },
    aboutfclong: { type: String, required: true },
    aboutfclongimg: { type: String, required: true },
});

module.exports = mongoose.model('longfcabout', shortaboutSchema);
