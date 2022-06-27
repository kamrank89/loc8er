var express = require("express");
var router = express.Router();

/* GET home page. */
const homepageController = (req, res) =>
  res.render("index", { title: "Express" });
router.get("/", homepageController);

module.exports = router;
