const mongoose = require("mongoose");
const Loc = mongoose.model("Location");

const reviewsReadOne = (req, res) => {
  res.status(200).json({ status: "success" });
};
const reviewsUpdateOne = (req, res) => {
  res.status(200).json({ status: "success" });
};
const reviewsDeleteOne = (req, res) => {
  res.status(200).json({ status: "success" });
};
const reviewsCreate = (req, res) => {
  res.status(200).json({ status: "success" });
};

module.exports = {
  reviewsReadOne,
  reviewsUpdateOne,
  reviewsDeleteOne,
  reviewsCreate,
};
