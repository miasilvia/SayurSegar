const express = require("express"); //untuk panggil express
const app = express();
const port = 3000 || process.env.PORT;
const routes = require("./routes/index"); //memanggil index dalam folder routes

//dua baris ini adalah contoh built in middleware yg disediakan oleh express
app.use(express.json()); //for parshing application/json
app.use(express.urlencoded({ extended: true })); //for parshing application/x-www-form-urlencoded DI POSTMAN

//ini root level middleware
app.use("/", routes); //panggil export index.js yg ada di folder routes

app.listen(port, () => {
  console.log("Server nyala");
});
