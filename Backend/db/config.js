const mysql2 = require("mysql2");
const dotenv = require("dotenv");
dotenv.config();

const dbconnection = mysql2.createPool({
  user: process.env.DBUSER,
  database: process.env.DATABASE,
  host : process.env.HOST,
  password: process.env.DBPASSWORD,
  connectionLimit: 5,
  port: 8889,
});
//const result =  dbconnection.execute("select 'test' ");

// console.log("database connection established!") + result;
module.exports = dbconnection.promise();
