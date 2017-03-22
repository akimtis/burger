var express = require("express");
var bodyParser = require("body-parser");
var methodOverride = require('method-override');
var routes = require("./controllers/burgers_controller.js");
var exphbs = require("express-handlebars");
var PORT = 3000;

var app = express();

// middleware
app.use(bodyParser.urlencoded({ extended: false }));

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");


// routes
app.use("/", routes);

app.listen(PORT, function(){
  console.log("listening on port 3000");
})