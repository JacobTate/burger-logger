var orm = require("../config/orm.js");

var burger = {
     eat: function (BurgerID, cb) {
         orm.eat(BurgerID, cb)
     },
     create: function (BurgerName) {
         orm.create(BurgerName)
     },
    showAll: function(cb){
        orm.showAll(function(res){
            cb(res);
        });
    }
}


module.exports = burger;