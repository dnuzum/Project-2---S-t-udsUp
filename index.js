var express = require('express');

var app = express();

app.set("view engine", "ejs");

// Home Page
app.get("/", function(req, res) {
	res.render("index");
});



// Google Search Auth
app.get("/google51f837d0a25e2269.html", function(req, res) {
	res.render("../google51f837d0a25e2269.html");
});

var port = process.env.PORT || 4000;
app.listen(port, function() {
	console.log("Running on " + port);
});

