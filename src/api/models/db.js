// For creating a connection to the database specified in dbConfig.js

const mysql = require("mysql");

// IMPORTANT
// Change this for proper routing!
const dbConfig = require('../../dbConfig.js');

// Create a connection to the database
const connection = mysql.createConnection({
  host: dbConfig.HOST,
  user: dbConfig.USER,
  password: dbConfig.PASSWORD,
  database: dbConfig.DB
});

// open the MySQL connection
connection.connect(error => {
  if (error) throw error;
  console.log("Successfully connected to the database.");
});

module.exports = connection;