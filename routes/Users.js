var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var login = require('../models/Users.js');

/* SAVE USER */
router.post('/', function(req, res, next) {
    Users.create(req.body, function (err, post) {
      if (err) return next(err);
      res.json(post);
    });
  });