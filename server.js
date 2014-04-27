var express 	= require('express');
var bodyParser 	= require('body-parser');
var app 		= express();
var ejs = require('ejs');

app.use(express.static(__dirname + '/public'));
app.use(bodyParser()); 
app.engine('html', ejs.renderFile);
app.set('view engine', 'ejs');

//TODO: move routes out of here, to clean up.
app.get('/', function(req, res) {
    res.render('login');
});

app.post('/login', function(req, res){
  //TODO: make ajax call to ravelry to login with username and password
  var username = req.body.username;
  var password = req.body.password;
  console.log("username: "+username+" pass: "+password);

  res.redirect('main');
});

app.get('/main', function(req, res){
  res.render('main');
});

app.get('/api/projects', function(req, res){
	//TODO: make ajax call from ravelry to get all user's projects
	var projectsList = [
		{"id": 123, "name": "top down socks"},
		{"id": 456, "name": "crewneck sweater"}
	];
	res.json(projectsList);
});

app.listen(3000);
