//** External Modules
// require('dotenv').config();
const express = require("express");
const cors = require("cors");
// const logger = require('morgan');
// const session = require('express-session');
// const passport = require('passport');
// const GoogleStrategy = require('passport-google-oauth').OAuth2Strategy;
// const methodOverride = require('method-override');


//** Internal Modules

//** Connect to DB

//** Instanced Module
const app = express();

//** Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// instead of using morgan to log...i.e. app.use(logger('morgan'));
app.use((req, res, next) => {
  console.log(`${req.method} ${req.path} - ${req.ip}`);
  next();
});
// app.use(express.static('public'));
// app.use(session({
  //   secret: '',
  //   resave: false,
  //   saveUninitialized: true
  // }));
  // app.use(passport.initialize());
  // app.use(passport.session());
  // app.use(methodOverride('_method'));
  
  //** App Configuration
  // app.set('view engine', 'ejs');
  
  //** Routes
  
  
  // pass a "preflight" check or JSON request on chrome
app.use(cors());

app.options("*", (req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'GET, PUT, POST, OPTIONS');
  req.header('Access-Control-Allow-Headers', 'Authorization, Content-Length, X-Requested-With');
  res.send(200);
}); 

//** System Variable
const PORT = process.env.PORT || 3000;

//** Server Bind
app.listen(PORT, () => console.log(`Listening on ${PORT}`));