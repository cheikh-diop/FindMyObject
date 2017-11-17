var mongoose = require('mongoose');
var schema = new mongoose.Schema({
    user: {
        last_name: String,
        name: String,
        email: String,
        password: String,
        phone_number: String,
        address: {
            street: String,
            city: String,
            code_city: Number,
            country: String
        },
        advert: {
            type: String,
            description: String,
            mark: String,
            model: String,
            image_url: String,
            address: {
                street: String,
                city: String,
                code_city: Number,
                country: String
            },
            date_time: String

        }

    }

});
module.exports = mongoose.model('User', schema);
