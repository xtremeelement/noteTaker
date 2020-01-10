const express = require("express");
const fs = require("fs");
const path = require("path");

const app = express();

const PORT = process.env.PORT || 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("./public"));

require("./renderhtml")(app);
require("./apistuff")(app);

app.listen(PORT, function(req, res) {
  console.log("http://localhost:" + PORT);
});
