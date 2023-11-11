const fs = require("fs"); //memanggil fs
const db = require("../db.js");

class UserControllers {
  static helloWorld(req, res) {
    res.render("helloWorld"); //memanggil file helloWorld.ejs di file views
  }

  static greeting(req, res) {
    res.render("greeting", { fullname: "Miaaaasa" });
  }

  static async viewProduct(req, res) {
    try {
      const dataProduks = await db("data_produk").select("*");
      res.render("index", { dataProduks: dataProduks });
    } catch (error) {
      res.status(500).json(error);
    }
  }
  static loginFormUser(req, res) {
    res.render("loginForm"); ////memanggil file greeting.ejs di file views
  }
  static registerFormUser2(req, res) {
    res.render("register-user"); ////memanggil file greeting.ejs di file views
  }
  static loginUserResult(req, res) {
    const { username, password } = req.body;
    console.log(`${username} dan ${password}`);
    res.status(200).json({
      message: `Anda berhasil login dengan username ${username} dan password ${password}`,
    });
  }

  static registerFormUser(req, res) {
    const { username, password } = req.body;
    console.log(`${username} dan ${password}`);
    res.status(201).json({
      message: `username anda ${username} dan password anda ${password} berhasil ditambahkan`,
    });
  }
}

module.exports = UserControllers;
