const express = require("express");
const routes = express.Router();
const UserControllers = require("../controllers/userControllers"); //import controllers

//contoh Route level middlaware
const printTime = (req, res, next) => {
  let nowDate = Date.now();
  console.log(`now time is ${nowDate}`);
  next();
};

routes.use(printTime);

// routes.post("/register", UserControllers.registerFormUser);

routes.get("/loginForm", UserControllers.loginFormUser);
routes.get("/register-user", UserControllers.registerFormUser);

routes.post("/login", UserControllers.loginUserResult);

module.exports = routes; //untuk mengeksport objek router
