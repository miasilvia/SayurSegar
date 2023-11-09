const express = require("express");
const routes = express.Router();
const path = require("path");
const DataArtikelControllers = require("../controllers/adminControllers-dataArtikel.js");

routes.get("/data-article", DataArtikelControllers.viewDataArticle);
routes.get(
  "/data-article/:id_artikel",
  DataArtikelControllers.viewDataArticleId
);
routes.post("/data-article", DataArtikelControllers.postDataArticle);
routes.put("/data-article/:id_artikel", DataArtikelControllers.putDataArticle);
routes.delete(
  "/data-article/:id_artikel",
  DataArtikelControllers.deleteDataArticle
);

routes.get("../public/Sayuran.png", (req, res) => {
  res.sendFile(path.join(__dirname, "Sayuran.png"));
});

module.exports = routes; //untuk mengeksport objek router
