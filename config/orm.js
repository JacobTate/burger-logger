
// Here is the O.R.M. where you write functions that takes inputs and conditions
// and turns them into database commands like SQL.

var connection = require("./connection.js");

function printQuestionMarks(num) {
  var arr = [];

  for (var i = 0; i < num; i++) {
    arr.push("?");
  }

  return arr.toString();
}

function objToSql(ob) {
  // column1=value, column2=value2,...
  var arr = [];

  for (var key in ob) {
    arr.push(key + "=" + ob[key]);
  }

  return arr.toString();
}

var orm = {
  create: function(name){
    var queryString = "INSERT INTO burgers (burger_name, devoured) VALUES ('??', FALSE);";
console.log(queryString);

    connection.query(queryString, [name],
  function(err, data){
    if(err) throw err;
    console.log(data);
    
  });
  },
   eat: function(burgerID, cb){
var queryString = "update burgers set devoured = true where id = ?"
connection.query(queryString, [burgerID],
  function(err, data){
    if(err) throw err;
    console.log(data);
    cb();
  });
   },
   showAll: function(cb){
     queryString = "select * from burgers;"
     connection.query(queryString, function(err, data){
       if(err) throw err;
       console.log(data);
       cb(data)
     })
   }
};

module.exports = orm;
