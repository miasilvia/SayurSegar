const express = require("express");
const routes = express.Router();
const InputToTransaction = require("../controllers/userControllers-transaction.js");

routes.post("/data-transaction", InputToTransaction.postDataTransaction);

module.exports = routes; //untuk mengeksport objek router
