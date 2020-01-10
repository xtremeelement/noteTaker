const fs = require("fs");
const path = require("path");

module.exports = function(app) {
  app.get("/notes", function(req, res) {
    res.send(path.join(__dirname, "../notes.html"));
  });

  app.get("*", function(req, res) {
    res.send(path.join(__dirname, "../index.html"));
  });
};
