const express = require("express");
const app = express();
const port = 3000;

app.use(express.json());
app.get("/product", (req, res) =>
  res.send("Selamat datang di Website Sayur Segar")
);

app.get("/login", (req, res) => res.send("Ini login"));

app.post("/post", (req, res) => {
  console.log(req.body);
  res.send("POST Request Called");
});

app.patch("/patch", (req, res) => {
  console.log(req.body);
  res.send("PATCH Request Called");
});

app.delete("/delete", (req, res) => {
  console.log(req.body);
  res.send("DELETE Request Called");
});

app.listen(port, () =>
  console.log(`Example app listening at http://localhost:${port}`)
);
