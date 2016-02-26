var express = require('express');
var bodyParser = require('body-parser');
var session = require('express-session');
var ejsLayouts = require('express-ejs-layouts')
var db = require('./models');
var flash = require('connect-flash');
var fullCalendar = require('fullcalendar');
var app = express();

app.set("view engine", "ejs");
app.use(express.static(__dirname + '/static/'));
app.use(bodyParser.urlencoded({extended: true}));
app.use(session({
	secret: 'sldkfjoiwfjoi2j4foiwoijf290923ufjsd',
	resave: false,
	saveUninitialized: true
}));
app.use(flash());
app.use(fullCalendar());

app.use(function(req, res, next) {
	if (req.session.userId) {
		db.user.findById(req.session.userId).then(function(user) {
			req.currentUser = user;
			res.locals.currentUser = user;
			next();
		});
	} else {
		req.currentUser = false;
		res.locals.currentUser = false;
		next();
	}
});


// Home Page
app.get("/", function(req, res) {
	res.render("index", {alerts: req.flash()});
});
// Pub Page
app.get("/pubs", function (req, res) {
	res.render("pubs");
});
// Meet Page
app.get("/meet", function (req, res) {
	if (req.currentUser) {
		res.render("meet");
	} else {
		req.flash('danger', 'You must be logged in to view this page.');
		res.redirect('/');
	}
});
// // Login Page
// app.get("/auth/login", function(req, res) {
// 	res.render("auth/login");
// });
// // Signup Page
// app.get("/auth/signup", function(req, res) {
// 	res.render("auth/signup")
// });

app.use('/auth', require('./controllers/auth'));


// Google Search Auth
app.get("/google51f837d0a25e2269.html", function(req, res) {
	res.render("google51f837d0a25e2269.html");
});

var port = process.env.PORT || 4000;
app.listen(port, function() {
	console.log("Running on " + port);
});

