const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const shortaboutSchema = new Schema({
    title: { type: String, required: true },
    newsdetail: { type: String, required: true },
    publisher: { type: String, required: true },
    date: { type: String, required: true },
    img: { type: String, required: true },
});

module.exports = mongoose.model('news', shortaboutSchema);
