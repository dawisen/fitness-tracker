const path = require("path");

module.exports = (app) => {
  app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname + "../public/index.html"));
  });

  app.get("/all", (req, res) => {
    db.animals.find({}, (err, found) => {
      if (err) {
        console.log(err);
      } else {
        res.json(found);
      }
    });
  });

  app.get("/name", (req, res) => {
    db.animals.find().sort({ name: 1 }, (err, found) => {
      if (err) {
        console.log(err);
      } else {
        res.json(found);
      }
    });
  });

  app.get("/weight", (req, res) => {
    db.animals.find().sort({ weight: -1 }, (err, found) => {
      if (err) {
        console.log(err);
      } else {
        res.json(found);
      }
    });
  });
};
