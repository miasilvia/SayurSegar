const express = require("express");
const routes = express.Router();
const path = require("path");
const LoginUser = require("../controllers/userControllers-loginAccount.js");

routes.post("/login-user", LoginUser.inputLoginUser);

module.exports = routes;
