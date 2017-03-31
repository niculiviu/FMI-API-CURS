var crypto = require('crypto');
var mongoose =require('mongoose');
var user=mongoose.model('user');


function hashPW(pwd){
	return crypto.createHash('sha256').update(pwd).digest('base64').toString();
}

exports.login = function(req,res){
        
        user.findOne({email:req.body.username}).
        exec(function(err,user){
            
            console.log(err);
        if(!user){
            res.status(404).json({msg: 'user not found'});
        }else 
            if(user.hashed_password === hashPW(req.body.pass.toString())){
                req.session.regenerate(function(){
                req.session.user=user.id;
                req.session.username=user.email;
                req.session.firstName=user.first_name;
                req.session.lastName=user.last_name;
                res.json(user);
           }); 
        }else{
           res.status(404).json({msg:'user or pass'});
        }   
        
        });
    }

exports.register = function(req, res){
    
    var newUser= new user();
    
    newUser.set('email','test2');
    newUser.set('hashed_password',hashPW('test'));
    newUser.set('first_name','test');
    newUser.set('last_name','test');
   
    newUser.save(function(err){
        if(err){
        res.status(500).json({err});
        }
        else{
        res.status(200).json({success:'User Inserted successfuly!'});
        }
    });
}

exports.getAllUsers=function(req,res){
    user.find().exec(function(err,users){
        if(err){
            res.status(500).json({err})
        }else{
            res.status(200).json(users);
        }
    });
}