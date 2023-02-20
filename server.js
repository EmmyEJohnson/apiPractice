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

//** MIDDLEWARE
// need for JSON requests
app.use(express.json());

// need for form requests
app.use(express.urlencoded({ extended: false }));

// creating anonymous logger instead of using morgan to log...i.e. app.use(logger('morgan'));
app.use((req, res, next) => {
  console.log(`${req.method} ${req.path} - ${req.ip}`);
  next();
});

app.use(express.static('public'));
app.use(express.static('css'));

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
  
//** ROUTES
const timeRoutes = require("./routes/time");
const nameRoutes = require("./routes/name");
const jsonRoutes = require("./routes/json");
const echoAllRoutes = require("./routes/echo-all");

app.use("/routes/time", timeRoutes);
app.use("/routes/name", nameRoutes);
app.use("/routes/json", jsonRoutes);
app.use("/routes/echo-all", echoAllRoutes);

app.get('/', (req, res) => {
  res.sendFile(__dirname + "/views/index.html");
});

app.get('/form', (req, res) => {
  res.sendFile(__dirname + "/views/form.html");
});

app.get('/:word/echo', (req, res) => {
  res.json({ "echo": req.params.word })
});

app.all('*', (req, res) => {
  res.send("Invalid route");
});
  
  
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