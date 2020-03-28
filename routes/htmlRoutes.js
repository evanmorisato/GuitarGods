var db = require("../models");

module.exports = function(app) {
  // Load index page
  app.get("/", function(req, res) {
    db.Guitarist.findAll({}).then(function(dbGuitarist) {
      // console.log(dbGuitarist);
      res.render("index", {
        msg: "Guitar Gods",
        artist: dbGuitarist
      });
    });
  });

  app.get("/add", function(req, res) {
    // console.log(dbGuitarist);
    res.render("add");
  });

  app.get("/all", function(req, res) {
    // console.log(dbGuitarist);

    res.render("all");
  });

  app.get("/lastFm", function(req, res) {
    // console.log(dbGuitarist);
    res.render("lastFm");
  });

  app.get("/update", function(req, res) {
    // console.log(dbGuitarist);
    res.render("update");
  });

  app.get("/media", function(req, res) {
    res.render("media");
  });
};
