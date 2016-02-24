var express = require('express');
var db = require('./models');


var app = express();

app.set("view engine", "ejs");
app.use(express.static(__dirname + '/static/'));


// Home Page
app.get("/", function(req, res) {
	res.render("index");
});
// Pub Page
app.get("/pubs", function (req, res) {
	res.render("pubs");
});
// Meet Page
app.get("/meet", function (req, res) {
	res.render("meet");
});
// Login Page
app.get("/login", function(req, res) {
	res.render("auth/login");
});
// Signup Page
app.get("/signup", function(req, res) {
	res.render("auth/signup")
});



// Google Search Auth
app.get("/google51f837d0a25e2269.html", function(req, res) {
	res.render("google51f837d0a25e2269.html");
});

var port = process.env.PORT || 4000;
app.listen(port, function() {
	console.log("Running on " + port);
});

