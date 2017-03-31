var crypto = require('crypto');
var express=require('express');

module.exports=function(app){
    var user=require('./controllers/userNodeController.js');
    
	app.post('/user/login/user', user.login);
    app.post('/user/register/user', user.register);
    app.post('/user/getAllUsers',user.getAllUsers);
}