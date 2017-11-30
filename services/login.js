import { async } from 'q';
import { Error } from 'mongoose';

//Injection the model
var Authentification = require('../models/login.js/');

//Saving the context of this module inside the variable _the
_this = this

exports.createUser = async function name(user) {

    //creating a new Mongoose object

    var newUser = new Authentification({

       email: user.email,
       name: user.name,

    })

    try{
        //Saving the user 
        var saveUser = await newUser.save()
        return saveUser;
    }catch(e){
        //Return a Error message describing the reason 
        throw Error("Erro while creating user")

    }
}
