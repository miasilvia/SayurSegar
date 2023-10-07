const express = require("express"); //untuk panggil express
const app = express();
const port = 3000 || process.env.PORT;
const routes = require("./routes/index"); //memanggil index dalam folder routes

//dua baris ini adalah contoh built in middleware yg disediakan oleh express
//digunaka agar dapat membaca request sesuai format, dipanggil sebelum hendler function
app.use(express.json()); //for parshing application/json
app.use(express.urlencoded({ extended: false })); //for parshing application/x-www-form-urlencoded DI POSTMAN

//memanggil ejs sesuai dokumentasi
app.set("view engine", "ejs");

//ini root level middleware
app.use("/", routes); //panggil export index.js yg ada di folder routes

app.use(express.static("public")); // memanggil public agar folder di public menjadi static

//middleware untuk handle error yg lain, contoh not found
app.use((req, res, next) => {
  const error = new Error("Not Found");
  error.status = 404;
  console.log(error);
  next(error);
});

//middleware error handler, ini tidak menggunakan next
const errorMiddleware = (err, re, res, next) => {
  res.status(err.status || 500);
  res.send({
    error: {
      status: err.status || 500,
      message: err.message || "Internal Server Error",
    },
  });
};

app.use(errorMiddleware);

app.listen(port, () => {
  console.log("Server nyala");
});
