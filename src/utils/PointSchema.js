const mongoose = require("mongoose");

const { Schema } = mongoose;

const PointSchema = new Schema({
  type: {
    type: String,
    enum: ["Point"],
    required: true
  },
  coordinates: {
    type: [Number],
    required: true
  }
});

module.exports = PointSchema;
