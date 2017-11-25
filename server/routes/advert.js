const express = require('express');
const router = express.Router();
const MongoClient = require('mongodb').MongoClient;
const ObjectID = require('mongodb').ObjectID;
var mongoose=require('mongoose');

// Connect
var mongoose = require('mongoose');

mongoose.connect('mongodb://mongodb:mongodb@ds115546.mlab.com:15546/21findmyject', {useMongoClient : true  } );
var ad= new mongoose.Schema({
    
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
var user=new mongoose.Schema( {
    last_name: String,
    name: String,
    email: String,
    password: String,
    phone_number: String,
    advert : [ ad ],
    address: {
        street: String,
        city: String,
        code_city: Number,
        country: String
    }
}); 


var advertise=mongoose.model('advert',ad);
var user=mongoose.model('user',user)


// Get ad
router.get('/getAllAdvert', (req, res) => {

    advertise.find(function(err,ads){
        
        if (err){
            
            res.send(err);
        }
        res.send(ads);

    });
});

router.post('/addAdvertLessUser',(req,res)=>{
    var a =new advertise();
    
    a.description="J'ai perdu mon iphone a talence Veuillez me contacter au 06 95 93 36 47";
    a.type="lost";
    a.mark="Iphone";
    a.model="6";
    a.address.code_city="33600";
    a.address.city="Pessac";
    a.address.country="France";
    a.date_time="21h:00";
    a.save(function(err){

        if (err){
            res.send(err);
        }
        res.send({message:"add created"});
    })


});
router.post('/addAdvertLessUser',(req,res)=>{
    var a =new advertise();
    
    a.description="J'ai perdu mon iphone a talence Veuillez me contacter au 06 95 93 36 47";
    a.type="lost";
    a.mark="Iphone";
    a.model="6";
    a.address.code_city="33600";
    a.address.city="Pessac";
    a.address.country="France";
    a.date_time="21h:00";
    a.save(function(err){

        if (err){
            res.send(err);
        }
        res.send({message:"add created"});
    })


});

module.exports = router;