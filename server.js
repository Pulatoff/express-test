const app = require("./index.js");
const dotenv = require("dotenv");
const mongoose = require("mongoose");

dotenv.config({ path: "./config.env" });

const DB = process.env.DATABASE;

mongoose.connect(DB, () => {
  console.log(`connected to DATABASE`);
});

app.listen(+process.env.PORT, process.env.URL, () => {
  console.log("server works");
});
