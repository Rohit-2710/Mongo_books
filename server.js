const express = require("express");
const bodyParser = require("body-parser");

const app = express();

const dbconfig = require("./config/databaseConfig");
const mongoose = require("mongoose");

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var corOptions = {
  origin: "https://localhost:4200",
};
app.use(cors(corOptions));

mongoose.Promise = global.Promise;
mongoose
  .connect(dbconfig.url, { useNewUrlParser: true })
  .then(() => {
    console.log("Connection with MongoDB established Successfully");
    require("./app/routing")(app);
    app.listen(3000, () => {
      console.log("Server Listening at http://localhost:3000");
    });
  })
  .catch((err) => {
    console.log(err);
  });

app.get("/", (req, res) => {
  res.json({
    message: "Welcome to CRUD application for book database using MongoDB",
  });
});
