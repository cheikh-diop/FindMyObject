var mongoose = require('mongoose');


var UserSchema = new mongoose.Schema({
    last_name: String,
    name: String,
    email: String,
    password: String,
    phone_number: String,
    advert: [ad],
    address: {
        street: String,
        city: String,
        code_city: Number,
        country: String
    }
});

module.exports = mongoose.model('user',UserSchema);