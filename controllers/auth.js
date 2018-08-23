// Require express 
var express = require('express');

// Declare a new router 
var router = express.Router();

// Define routes
router.get('/login', function(req, res){
	res.render('auth/login');
}); 

router.post('/login', function(req, res){
	res.send('login port route');
});

router.get('/signup', function(req, res){
	res.render('auth/signup');
}); 

router.post('/signup', function(req, res){
	res.send('signup port route');
});

router.get('/logout', function(req, res){
	res.send('logout route');
}); 

module.exports = router; 