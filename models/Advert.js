var mongoose = require('mongoose');


var AdvertSchema = new mongoose.Schema({
    
        type: String,
        description: String,
        mark: String,
        model: String,
        image_url: String,
        date_time: String,
        address: {
            street: String,
            city: String,
            code_city: Number,
            country: String
        }
    });

    module.exports = mongoose.model('advert',AdvertSchema);