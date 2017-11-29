import { async } from 'q';

//Injection the service 

var AuthentificationService = require('../services/login.js');

//Saving the context of this module inside the variable _the
_this = this


//Async COntroller function to get the User List 
exports.getUsers = async function(req, res, next){
    
    var email = req.query.email ? req.query.email : 1
    var name  = req.query.name  ? req.query.name : 1


    try{
        var users = await AuthentificationService.getUsers();
    }catch(e){

    }
}