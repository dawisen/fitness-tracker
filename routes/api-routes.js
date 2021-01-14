module.exports = (app) => {
  // get endpoint that gets all workouts
    app.get("/api/workouts", (req, res) => {
      // call mongo to get all workouts
      // return as json w/ express
    });

    app.put("/api/workouts/:id", (req, res) => {
        // *****add an exercise to a workout*****
        // get the id paramter so i know what workout to upda
        // use mongo to call the workout that matches the id
        // update the excersise array in that workout

        res.json('ok');
    })
};
