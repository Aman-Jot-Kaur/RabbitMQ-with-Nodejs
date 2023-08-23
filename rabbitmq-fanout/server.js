const express = require("express");
const bodyParser = require("body-parser");

const app = express();

const mongoose = require("mongoose");
var connectionUrl = "'mongodb://mongo:27017/users";
app.use(bodyParser.json("application/json"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use("/", require("./routes/userRoutes"));; //routes from router

mongoose.connect('mongodb+srv://aman:pass123@cluster0.rdg7ett.mongodb.net/dbuser', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => {
  app.listen(8081, () => {
    console.log("Example app listening on port 8081!");
  });
}).catch((err) => {
  console.error("Error connecting to MongoDB:", err);
});


  