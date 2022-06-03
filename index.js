const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const app = express();
const userRouter = require("./route/userRoute.js");
const testRouter = require("./route/testRouter");
const formRouter = require("./route/formRouter");

// MiddleWares

app.use(bodyParser.urlencoded({ extended: true })); // Formani malumotlarini olish uchun

app.use(express.json());

app.use(cors());

app.use((req, res, next) => {
  res.setHeader("Acces-Control-Allow-Origin", "*");
  res.setHeader("Acces-Control-Allow-Methods", "GET,POST,PUT,PATCH,DELETE");
  res.setHeader("Acces-Contorl-Allow-Methods", "Content-Type", "Authorization");
  next();
});

app.disable("x-powered-by");
app.use("/user", userRouter);
app.use("/test", testRouter);
app.use("/form", formRouter);

module.exports = app;
