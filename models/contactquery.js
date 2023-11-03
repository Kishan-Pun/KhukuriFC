const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const shortaboutSchema = new Schema(
  {
    // cqid: { type: String, required: true },
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    phone: { type: String, required: true },
    subject: { type: String, required: true },
    message: { type: String, required: true },
  },
//   { _id: false } // Disable the automatic creation of the default "_id" field
);

module.exports = mongoose.model("contactquery", shortaboutSchema);
