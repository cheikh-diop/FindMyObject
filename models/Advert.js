

var mongoose = require('mongoose');


var AdvertSchema = new mongoose.Schema({
        title:String,
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
    AdvertSchema.index({'$**': 'text'});
    var advertise = mongoose.model('advert',AdvertSchema);
    
    module.exports = advertise;
