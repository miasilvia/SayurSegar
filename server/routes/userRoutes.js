const express = require("express");
const routes = express.Router();
const UserControllers = require("../controllers/userControllers"); //import controllers

// routes.post("/register", UserControllers.registerFormUser);

routes.get("/loginForm", UserControllers.loginFormUser);
routes.get("/register-users", UserControllers.registerFormUser2);
routes.post("/login", UserControllers.loginUserResult);

module.exports = routes; //untuk mengeksport objek router
