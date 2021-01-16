let mongoose = require("mongoose");
let Workout = require("../models/workout");

module.exports = (app) => {
  // get endpoint that gets all workouts
  app.get("/api/workouts", (req, res) => {
    // call mongo to get all workouts
    Workout.find({})
      .then((workouts) => {
        // return as json w/ express
        res.json(workouts);
      })
      .catch((err) => {
        res.status(400).json(err);
        console.log(err);
      });
  });

  app.get("/api/workouts/range", (req, res) => {
    Workout.find({})
      .then((workouts) => {
        res.json(workouts);
      })
      .catch((err) => {
        res.status(400).json(err);
        console.log(err);
      });
  });

  app.post("/api/workouts", (req, res) => {
    // console.log(req.body);
    // db.Workout.create(req.body)
    //   .then((newWorkout) => {
    //     console.log("NEW WORKOUT", newWorkout);
    //     res.json(newWorkout);
    //   })
    //   .catch((err) => {
    //     res.status(400).json(err);
    //   });
    Workout.create({})
      .then((dbWorkout) => {
        res.json(dbWorkout);
      })
      .catch((err) => {
        res.json(err);
      });
  });

  app.put("/api/workouts/:id", ({ body, params }, res) => {
    Workout.findByIdAndUpdate(params.id)
  } )

  app.delete("/api/workouts", ({ body }, res) => {
    Workout.findByIdAndDelete(body.id);
  })

};
