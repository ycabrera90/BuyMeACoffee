const express = require("express");
const multer = require("multer");
const path = require("path");

const errorController = require("./controllers/error");
const paymentRoutes = require("./routes/payment");

const app = express();
const upload = multer();

app.set("view engine", "ejs");

app.set("views", "views");

app.use(upload.array());

app.use(express.static(path.join(__dirname, "public")));

app.use("/payment", paymentRoutes);

app.use(errorController.get404);

app.listen(3000);
