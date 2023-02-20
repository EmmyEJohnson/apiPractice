const express = require("express");
const cors = require("cors");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());

// pass a "preflight" check or JSON request on chrome
app.options("*", (req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'GET, PUT, POST, OPTIONS');
  req.header('Access-Control-Allow-Headers', 'Authorization, Content-Length, X-Requested-With');
  res.send(200);
}); 

app.listen(PORT, () => console.log(`Listening on ${PORT}`));