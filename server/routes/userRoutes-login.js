const express = require("express");
const routes = express.Router();
const RegisterAccountUser = require("../controllers/userControllers-registrasiAccount.js");
const db = require("../db.js");

var mysql = require("mysql");
var session = require("express-session");
var bodyParser = require("body-parser");
var path = require("path");

let connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "nama_database",
});

routes.use(
  session({
    secret: "secret",
    resave: true,
    saveUninitialized: true,
  })
);
routes.use(bodyParser.urlencoded({ extended: true }));
routes.use(bodyParser.json());

routes.get("/login", function (request, response) {
  response.sendFile(path.join(__dirname + "/login.html"));
});

routes.post("/auth", function (request, response) {
  var username = request.body.username;
  var password = request.body.password;
  if (username && password) {
    db.query(
      "SELECT * FROM data_user WHERE username = ? AND password = ?",
      [username, password],
      function (error, results, fields) {
        if (results.length > 0) {
          request.session.loggedin = true;
          request.session.username = username;
          response.redirect("/home");
        } else {
          response.send("Incorrect Username and/or Password!");
        }
        response.end();
      }
    );
  } else {
    response.send("Please enter Username and Password!");
    response.end();
  }
});

routes.get("/home", function (request, response) {
  if (request.session.loggedin) {
    response.send("Welcome back, " + request.session.username + "!");
  } else {
    response.send("Please login to view this page!");
  }
  response.end();
});
