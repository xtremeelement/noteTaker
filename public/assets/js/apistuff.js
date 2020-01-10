const fs = require("fs");
const path = require("path");
const counter = 0;

module.exports = function(app) {
  app.get("/api/notes", function(req, res) {
    res.json(fs.readFile("..../db/db.json"));
  });

  app.post("/api/notes", function(req, res) {
    const test = {
      name: "blah"
    };

    test.id = counter;
    counter++;
  });

  app.delete("/api/notes/:id", (req, res) => {});
};
