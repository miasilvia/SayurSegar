const express = require("express");
const routes = express.Router();
const RegisterAccountUser = require("../controllers/userControllers-registrasiAccount.js");

routes.post("/register-users", RegisterAccountUser.postDataAccountUser);

routes.get("/register-user", RegisterAccountUser.viewDataDesaByKecamatan);

module.exports = routes; //untuk mengeksport objek router
