var express = require("express");

var router = express.Router();
var burger = require("../models/burger.js");

// get route -> index
router.get("/", function(req, res) {
  res.redirect("/burgers");
});

router.get("/burgers", function(req, res) {

  burger.showAll(function(burger_data){
  
    res.render("index", {burger_data});
  });

 
});

// post route -> back to index
router.post("/burgers/create", function(req, res){
  res.redirect("/burgers")
  console.log(req.body.burger_name);
 
  
  
burger.create(req.body.burger_name)
});

// put route -> back to index
router.put("/burgers/:id", function(req, res){
  burger.eat(req.params.id, function(){
    res.sendStatus(200);
   
    
  })
})

module.exports = router;
