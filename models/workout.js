const mongoose = require("mongoose");

const { Schema } = mongoose;

const workoutSchema = new Schema({
  day: {
    type: Date,
    default: Date.now,
  },
  exercises: [
    {
      type: {
        type: String,
        trim: true,
        required: "exercise type is required",
      },
      name: {
        type: String,
        trim: true,
        required: "exercise name is required",
      },
      duration: {
        type: Number,
        required: "exercise duration is required",
      },
      distance: { type: Number },
      weight: { type: Number },
      reps: { type: Number },
      sets: { type: Number },
    },
  ],
});
const Workout = mongoose.model("Workout", workoutSchema);

module.exports = Workout;
