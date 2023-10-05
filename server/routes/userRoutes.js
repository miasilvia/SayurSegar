const express = require("express");
const routes = express.Router();

routes.post("/register", (req, res) => {
  const { username, password } = req.body;
  console.log(`${username} dan ${password}`);
  res.status(201).json({
    message: `username anda ${username} dan password anda ${password} berhasil ditambahkan`,
  });
});

routes.post("/login", (req, res) => {
  const { username, password } = req.body;
  console.log(`${username} dan ${password}`);
  res.status(200).json({
    message: `Anda berhasil login dengan username ${username} dan password ${password}`,
  });
});

module.exports = routes; //untuk mengeksport objek router
