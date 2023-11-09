const db = require("../db.js");
class LoginUser {
  static async inputLoginUser(req, res) {
    const { username, password } = req.body;

    try {
      const user = await db("data_user").where({ username }).first();

      if (!user) {
        return res.status(400).json({ message: "User not found" });
      }

      if (user.password !== password) {
        return res.status(400).json({ message: "Invalid password" });
      }

      req.session.user = user;
      res.redirect("/"); // ganti dengan halaman yang ingin dituju setelah login
    } catch (err) {
      console.error(err);
      res.status(500).json({ message: "Server error" });
    }
  }
}

module.exports = LoginUser;
