const fs = require("fs");
const path = require("path");
let counter;

module.exports = function(app) {
  app.get("/api/notes", function(req, res) {
    res.json("../../../db/db.json");
  });

  app.post("/api/notes", function(req, res) {
    let dbData = JSON.parse(fs.readFileSync("../../../db/db.json"));

    counter = dbData.length + 1;

    const newNote = {
      title: req.body.title,
      text: req.body.text,
      id: counter
    };

    if (!newNote.name || !newNote.text) {
      return res.status(400).json({ msg: "please fill title and text" });
    }

    dbData.push(newNote);

    dbData = JSON.stringify(dbData, null, 2);

    fs.writeFile("../../../db/db.json", data, function(err) {
      if (err) throw err;
      console.log("Wrote to file");
    });
  });

  app.delete("/api/notes/:id", (req, res) => {
    const deleteNote = req.body;
  });
};