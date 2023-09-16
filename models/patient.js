const mongoose = require("mongoose");

//schema for patients
const patientSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    phone: {
      type: Number,
      required: true,
      unique: true,
    },
    age: {
      type: Number,
      required: true,
    },
    status: {
      type: String,
      enum: ["Negative", "Travelled-Quarantine", "Symptoms-Quarantine",
      "Positive-Admit"],
      required: true
    },
    doctor: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Doctor",
    },
  },
  {
    timestamps: true,
  }
);

const Patient = mongoose.model("Patient", patientSchema);

module.exports = Patient;
