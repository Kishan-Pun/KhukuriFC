const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const shortaboutSchema = new Schema({
    playername: { type: String, required: true },
    playerposition: { type: String, required: true },
    playerfblink: { type: String, required: true },
    playerinstalink: { type: String, required: true },
    playerimg: { type: String, required: true },
});

module.exports = mongoose.model('player', shortaboutSchema);
