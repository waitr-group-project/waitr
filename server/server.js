var express = require("express"),
    bodyParser = require("body-parser"),
    cors = require("cors");

var port = 3210;

var app = express();

app.use(bodyParser.json());
app.use(cors());

app.listen(port, function() {
  console.log("listening on port ", port);
});
