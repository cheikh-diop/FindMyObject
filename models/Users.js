var mongoose = require('mongoose');
<<<<<<< HEAD


var UserSchema = new mongoose.Schema({
=======
var Advert = require('../models/Advert.js');

var UserSchema = new mongoose.Schema({

>>>>>>> master
    last_name: String,
    name: String,
    email: String,
    password: String,
    phone_number: String,
<<<<<<< HEAD
    advert: [ad],
=======
    advert: [],
>>>>>>> master
    address: {
        street: String,
        city: String,
        code_city: Number,
        country: String
    }
});

module.exports = mongoose.model('user',UserSchema);