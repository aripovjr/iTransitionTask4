const express = require("express");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const cors = require("cors");
const mysql = require("mysql");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const app = express();
const port = 5000;

// Middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cookieParser());
app.use(cors());

// MySQL connection setup
const db = mysql.createConnection({
  host: "localhost",
  user: "your_mysql_username",
  password: "your_mysql_password",
  database: "your_database_name",
});

db.connect((err) => {
  if (err) {
    throw err;
  }
  console.log("Connected to MySQL database.");
});

// Define routes and implement the required API endpoints

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
