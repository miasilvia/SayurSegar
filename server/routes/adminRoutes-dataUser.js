const express = require("express");
const routes = express.Router();
const DataUserControllers = require("../controllers/adminControllers-dataUser.js");

routes.get("/data-user", DataUserControllers.viewDataUser);
routes.get("/data-user/:id_user", DataUserControllers.viewDataUserId);
routes.post("/data-user", DataUserControllers.postDataUserAdmin);
routes.put("/data-user/:id_user", DataUserControllers.putDataUser);
routes.delete("/data-user/:id_user", DataUserControllers.deleteDataUser);

module.exports = routes; //untuk mengeksport objek router
