/* Requiring Packages */
const mongoose = require("mongoose");

/* Subdocument for Mongoose */
const openingTimeSchema = new mongoose.Schema({
  days: {
    type: String,
    required: true,
  },
  opening: String,
  closing: String,
  closed: {
    type: Boolean,
    required: true,
  },
});

const reviewSchema = new mongoose.Schema({
  author: String,
  rating: {
    type: Number,
    required: true,
    min: 0,
    max: 5,
  },
  reviewText: String,
  createdOn: {
    type: Date,
    default: Date.now,
  },
});

/* Making Mongoose Schema */
const locationSchema = new mongoose.Schema({
  name: { type: String, required: true },
  address: String,
  rating: {
    type: Number,
    defualt: 0,
    min: 0,
    max: 5,
  },
  facilities: [String],
  coords: {
    type: { typr: String },
    coordinates: [Number],
  },
  openingTimes: [openingTimeSchema],
  reviews: [reviewSchema],
});
locationSchema.index({ coords: "2dsphere" });
