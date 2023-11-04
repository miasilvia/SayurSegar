const express = require("express");
const routes = express.Router();
const path = require("path");
const DataArtikelControllers = require("../controllers/adminControllers-dataArtikel.js");

routes.get("/data_article", DataArtikelControllers.viewDataArticle);
routes.get(
  "/data_article/:id_artikel",
  DataArtikelControllers.viewDataArticleId
);
routes.post("/data_article/post", DataArtikelControllers.postDataArticle);
routes.put("/data_article/:id_artikel", DataArtikelControllers.putDataArticle);
routes.delete(
  "/data_article/:id_artikel",
  DataArtikelControllers.deleteDataArticle
);

routes.get("../public/Sayuran.png", (req, res) => {
  res.sendFile(path.join(__dirname, "Sayuran.png"));
});

module.exports = routes; //untuk mengeksport objek router
