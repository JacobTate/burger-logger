var express = require("express");

var router = express.Router();
var burger = require("../models/burger.js");

// get route -> index
router.get("/", function(req, res) {
  res.redirect("/burgers");
});

router.get("/burgers", function(req, res) {
  //FIXME:
  burger.showAll(function(burger_data){
  
    res.render("index", {burger_data});
  });

 
});

// post route -> back to index


// put route -> back to index


module.exports = router;
