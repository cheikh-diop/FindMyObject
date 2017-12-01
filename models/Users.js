var mongoose = require('mongoose');
var Advert = require('../models/Advert.js');

var UserSchema = new mongoose.Schema({

    last_name: String,
    name: String,
    email: String,
    password: String,
    phone_number: String,
    advert: [],
    address: {
        street: String,
        city: String,
        code_city: Number,
        country: String
    }
});

module.exports = mongoose.model('user',UserSchema);