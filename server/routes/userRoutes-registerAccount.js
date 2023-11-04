const express = require("express");
const routes = express.Router();
const RegisterAccountUser = require("../controllers/userControllers-registrasiAccount.js");

routes.post("/register-user", RegisterAccountUser.postDataAccountUser);

module.exports = routes; //untuk mengeksport objek router
