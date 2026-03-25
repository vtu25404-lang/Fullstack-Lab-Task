const mysql = require("mysql2");

const db = mysql.createPool({
  host: "localhost",
  user: "root",
  password: "Rishi@99",
  database: "dashboard1",
});

module.exports = db.promise();