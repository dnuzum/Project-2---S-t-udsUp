var express = require('express');

var app = express();

app.set("view engine", "ejs");


var port = process.env.PORT || 4000;
app.listen(port, function() {
	console.log("Running on " + port);
});