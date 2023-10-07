const express = require("express");
const routes = express.Router();

//contoh Route level middlaware
const printTime = (req, res, next) => {
  let nowDate = Date.now();
  console.log(`now time is ${nowDate}`);
  next();
};

routes.use(printTime);

routes.post("/register", (req, res) => {
  const { username, password } = req.body;
  console.log(`${username} dan ${password}`);
  res.status(201).json({
    message: `username anda ${username} dan password anda ${password} berhasil ditambahkan`,
  });
});

routes.get("/loginForm", (req, res) => {
  // res.send("Hello World");
  res.render("loginForm"); ////memanggil file greeting.ejs di file views
});

routes.post("/login", (req, res) => {
  const { username, password } = req.body;
  console.log(`${username} dan ${password}`);
  res.status(200).json({
    message: `Anda berhasil login dengan username ${username} dan password ${password}`,
  });
});

module.exports = routes; //untuk mengeksport objek router
