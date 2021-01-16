const mongoose = require("mongoose");
const express = require("express");
const path = require("path");
const morgan = require("morgan");
const app = express();
const PORT = process.env.PORT || 3000;

//use Morgan to monitor HTTP requests made to our server
app.use(morgan("tiny"));

app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

require("./routes/html-routes.js")(app);
require("./routes/api-routes.js")(app);


app.listen(PORT, () => {
  console.log(`App running on port ${PORT}!`);
});

// Uniform Resource Identifier (URI) is the ID for the mongoDB database connection info
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/workout", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
  useFindAndModify: false,
}).then(() => {
  console.log('connected to DB')
});


