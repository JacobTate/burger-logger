var mysql = require("mysql");
require("dotenv").config();


var connection;
if( process.env.jaws_db ){
  connection = mysql.createConnection(process.env.jaws_db);
}
else{
  connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: process.env.user,
    password: process.env.password,
    database: "burgers_db"
  });
};
connection.connect(function(err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
});
module.exports = connection;