var orm = require("../config/orm.js");

var burger = {
    eat: function (BurgerID) {
        orm.eat(BurgerID)
    },
    create: function (BurgerName) {
        orm.create(BurgerName)
    }
}


module.exports = burger;