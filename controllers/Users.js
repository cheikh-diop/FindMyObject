import { async } from 'q';

//Injection the service 

var UsersService = require('../services/login.js');

//Saving the context of this module inside the variable _the
_this = this


//Async COntroller function to post new User  
exports.postUsers = async function(req, res, next){
    
    //traitement 

  
    try{
        var users = await UsersService.postUsers();
    }catch(e){

    }
}