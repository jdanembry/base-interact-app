const express = require("express");
const cors = require('cors');
const mongoose = require("mongoose");
const passport = require('passport');
const router = express.Router();

const users = require('./routes/api/users');
const app = express();
// Bodyparser middleware
app.use(cors());

app.use(
  express.urlencoded({
    extended: false
  })
);
app.use(express.json());
// DB Config
const db = require("./config/keys").mongoURI;
// Connect to MongoDB
mongoose
  .connect(
    db,
    { useNewUrlParser: true, useUnifiedTopology: true }
  )
  .then(() => console.log("MongoDB successfully connected"))
  .catch(err => console.log(err));

  app.use(passport.initialize());

  require('./config/passport')(passport);

  app.use('/api/users', users);

const port = process.env.PORT || 5000; // process.env.port is Heroku's port if you choose to deploy the app there
app.listen(port, () => console.log(`Server up and running on port ${port} !`));
