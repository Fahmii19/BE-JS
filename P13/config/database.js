// import mysql from 'mysql';
const mysql = require("mysql");

// import dotenv from 'dotenv';
const dotenv = require("dotenv").config();

// Create connection
const db = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE,
});

// Connect
db.connect((err) => {
  if (err) {
    console.log("Error connecting to Db" + err.stack);
    return;
  }
  console.log("MySql Connected...");
  return;
});

module.exports = db;
