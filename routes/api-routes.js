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

      var workoutToCreate = [{
        exercises: [ req.body ]
      }]
      console.log("THIS IS THE REQ.BODY", JSON.stringify(req.body));
      console.log("workoutToCreate", JSON.stringify(workoutToCreate));
      Workout.create(workoutToCreate)
        .then((dbWorkout) => {
          res.json(dbWorkout);
        })
        .catch((err) => {
          console.log(err)
        });
  });

  app.put("/api/workouts/:id", ({ body, params }, res) => {
    let workoutID = params.id;
    console.log('body', body)
    console.log('the id to update is: ', params.id)
    Workout.findByIdAndUpdate(
      { _id: `${workoutID}` },
      { exercises: body },
      (err, result) => {
        if (err) {
          res.send(err);
        } else {
          res.send(result);
        }
      }
    )
  } )

  // app.delete("/api/workouts", ({ body }, res) => {
  //   Workout.findByIdAndDelete(body.id);
  // })

};
