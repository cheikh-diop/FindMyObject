
var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
const jwt = require('jsonwebtoken');
const User = require('../models/Users.js');


/* GET ALL User */
router.get('/', function (req, res, next) {
  User.find(function (err, users) {
    if (err) return next(err);
    res.json(users);
  });
});

/* GET User  BY ID */
router.get('/:id', function (req, res, next) {
  User.findById(req.params.id, function (err, post) {
    if (err) return next(err);
    console.log("Le Json " + post);
    res.json(post);

  });
});

/* SAVE USER USING BCRYPT TO CRYPT PASSWORD*/
router.post('/register', function (req, res, next) {
  let newUser = new User({
    name: req.body.name,
    last_name:req.body.last_name,
    phone_number:req.body.phone_number,
    email: req.body.email,
    password: req.body.password,
    address : {
        city : req.body.address.city,
        city_code:req.body.address.city_code,
        street: req.body.address.street,
        country:req.body.address.country
    }
  });

  User.addUser(newUser, (err, user) => {
    if(err){
      res.json({success: false, msg:'Failed to register user'});
    } else {
      res.json({success: true, msg:'User registered'});
    }
  });
}  );


// Authenticate
router.post('/authenticate', (req, res, next) => {
  const email = req.body.email;
  const password = req.body.password;

  User.getUserByEmail(email, (err, user) => {
    if(err) throw err;
    if(!user){
      return res.json({success: false, msg: 'User not found'});
    }

    User.comparePassword(password, user.password, (err, isMatch) => {
      if(err) throw err;
      if(isMatch){
        const token = jwt.sign({data: user}, "secret", {
          expiresIn: 604800 // 1 week
        });

        res.json({
          success: true,
          token: 'JWT '+token,
          user: {
            id: user._id,
            name: user.name,
            email: user.email
          }
        });
      } else {
        return res.json({success: false, msg: 'Wrong password'});
      }
    });
  });
});
/* UPDATE User */
router.put('/:id', function (req, res, next) {
  User.findByIdAndUpdate(req.params.id, req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

/* DELETE User */
router.delete('/:id', function (req, res, next) {
  Advert.findByIdAndRemove(req.params.id, req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

module.exports = router;

