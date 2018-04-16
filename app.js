"use strict";

const express = require("express");
const app = express();
const names = ["Moe", "Larry", "Barbara"];

app.set("view engine", "pug");

app.use(express.static(__dirname + "/public"));
app.use("/bootstrap", express.static(__dirname + "/node_modules/bootstrap/dist/"));

app.get("/", (req, res, next) => {
  let homeData = {
    subtitle: "This came from my JS data",
    names
  }
  res.render("index", homeData);
});

const port = process.env.PORT || 8080;
app.listen(port, () => console.log(`Listening on port ${port}`));
