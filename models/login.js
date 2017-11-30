var mongoose = require('mongoose');

var AuthentificationSchema = new mongoose.Schema({
    name : String,
    email :  String,
})

const Authentification = mongoose.model('Authentification', AuthentificationSchema)

module.exports = Authentification;