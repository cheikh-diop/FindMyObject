var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var Advert = require('../models/Advert.js');

/* GET ALL ADVERTS */
router.get('/', function(req, res, next) {
  Advert.find(function (err, products) {
    if (err) return next(err);
    res.json(products);
  });
});

/* GET ADVERT  BY ID */
router.get('/:id', function(req, res, next) {
  Advert.findById(req.params.id, function (err, post) {
    if (err) return next(err);
    console.log("Le Json "+post);
    res.json(post);
    
  });
});

/* SAVE ADVERT */
router.post('/', function(req, res, next) {
  Advert.create(req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

/* UPDATE ADVERT */
router.put('/:id', function(req, res, next) {
  Advert.findByIdAndUpdate(req.params.id, req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

/* DELETE ADVERT */
router.delete('/:id', function(req, res, next) {
  Advert.findByIdAndRemove(req.params.id, req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

module.exports = router;