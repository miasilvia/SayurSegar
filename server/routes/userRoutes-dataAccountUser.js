const express = require("express");
const routes = express.Router();
const DataAccountUserControllers = require("../controllers/userControllers-dataAccountUser.js");

routes.get("/user-dataAccount", DataAccountUserControllers.viewDataUserId);
routes.put(
  "/user-dataAccount/:id_user",
  DataAccountUserControllers.putDataUser
);

module.exports = routes; //untuk mengeksport objek router
