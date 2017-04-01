var crypto = require('crypto');
var express=require('express');

module.exports=function(app){
    var user=require('./controllers/userNodeController.js');

	app.post('/user/login', user.login);
    app.post('/user/register', user.register);
    app.post('/user/getAll',user.getAllUsers);
    app.post('/user/getById',user.getById);

    var categories=require('./controllers/categoriesController.js');

    app.post('/categories/add',categories.add);
    app.post('/categories/delete',categories.delete);
    app.post('/categories/update',categories.update);
    app.post('/categories/getById',categories.getById);
    app.post('/categories/getByUserId',categories.getByUserId);
    app.post('/categories/getAll',categories.getAll);

    var tasks=require('./controllers/taskController.js');

    app.post('/tasks/add',tasks.add);
    app.post('/tasks/update',tasks.update);
    app.post('/tasks/delete',tasks.delete);
    app.post('/tasks/getAll',tasks.getAll);
    app.post('/tasks/getById',tasks.getById);
}