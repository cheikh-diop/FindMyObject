var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var Advert = require('../models/Advert.js');
var fs = require('fs');
var decode64 = require('base-64').decode;


/* MATCH PASSING ADVERT */
router.post('/match', function (req, res, next) {
  Advert.find({type:'Trouve'
  ,mark:req.body.mark,
  model:req.body.model
   }, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

/* GET ALL ADVERTS */
router.get('/', function (req, res, next) {
  Advert.find(function (err, products) {
    if (err) return next(err);
    res.json(products);
  });
});

/* GET ADVERT  BY ID */
router.get('/:id', function (req, res, next) {
  Advert.findById(req.params.id, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});


/* SAVE ADVERT */
router.post('/createAdvert', function (req, res, next) {
  Advert.create(req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

/* SAVE ADVERT SOME COLOMNS */
router.post('/addAdvertLessUser', (req, res) => {
  var a = new Advert();
  console.log("hello");
  var img = req.body.url;
  var data = img.replace(/^data:image\/\w+;base64,/, "");
  var buf = new Buffer(data, 'base64');
  fs.writeFile('src/assets/' + req.body.image_url, buf);
  a.title = req.body.title;
  a.description = req.body.description;
  a.type = req.body.type;
  a.mark = req.body.mark;
  a.model = req.body.model;
  a.address.code_city = req.body.code_city;
  a.address.city = req.body.city;
  a.address.country = req.body.country;
  a.date_time = req.body.date_time;
  a.image_url = req.body.image_url;
  a.save(function (err) {

    if (err) {
      console.log("hello");
      res.send(err);

    }
    res.send({ message: "add created" });
  })


});


/* UPDATE ADVERT */
router.put('/:id', function (req, res, next) {
  Advert.findByIdAndUpdate(req.params.id, req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

/* DELETE ADVERT */
router.delete('/:id', function (req, res, next) {
  Advert.findByIdAndRemove(req.params.id, req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

module.exports = router;