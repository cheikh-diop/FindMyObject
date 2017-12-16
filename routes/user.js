
var async = require("async");
var express = require('express');
var router = express.Router();
const passport = require('passport');
var mongoose = require('mongoose');
const jwt = require('jsonwebtoken');
const User = require('../models/Users.js');
var Advert = require('../models/Advert.js');

/* GET ALL User */
router.get('/', function (req, res, next) {
  User.find(function (err, users) {
    if (err) return next(err);
    res.json(users);
  });
});


/* SAVE USER USING BCRYPT TO CRYPT PASSWORD*/
router.post('/register', function (req, res, next) {
  let newUser = new User({
    name: req.body.name,
    last_name: req.body.last_name,
    phone_number: req.body.phone_number,
    email: req.body.email,
    password: req.body.password,
    address: {
      city: req.body.address.city,
      city_code: req.body.address.city_code,
      street: req.body.address.street,
      country: req.body.address.country
    }
  });

  User.addUser(newUser, (err, user) => {
    if (err) {
      res.json({ success: false, msg: 'Failed to register user' });
    } else {
      res.json({ success: true, msg: 'User registered' });
    }
  });
});


// Authenticate
router.post('/authenticate', (req, res, next) => {
  const email = req.body.email;
  const password = req.body.password;

  User.getUserByEmail(email, (err, user) => {
    if (err) throw err;
    if (!user) {
      return res.json({ success: false, msg: 'User not found' });
    }

    User.comparePassword(password, user.password, (err, isMatch) => {
      if (err) throw err;
      if (isMatch) {
        const token = jwt.sign({ data: user }, "secret", {
          expiresIn: 604800 // 1 week
        });

        res.json({
          success: true,
          token: 'JWT ' + token,
          user: {
            id: user._id,
            name: user.name,
            email: user.email
          }
        });
      } else {
        return res.json({ success: false, msg: 'Wrong password' });
      }
    });
  });
});
/* UPDATE User (add avert ) */
router.put('/addUserAdvert', function (req, res, next) {

  // Gestion  ajout annonce dans la table user et advert bloquant pour le moment du au probleme de synchonisation 

  console.log(req.body);

  async.waterfall([
    //creation dans la table advert
    function (callback) {
      Advert.create(req.body.advert, callback)
    },  // creation dans la table user
    function (advert, callback) {
      User.addUserAdvert(req.body._id, advert, callback)
    }
  ], function (error, success) {
    if (error) res.json({ success: false, msg: 'probleme ajout' });

    return res.json(success);
  });

  //res.json({ success: true, msg: 'ajout reussi' });
});

/* DELETE User adver */
router.put('/deleteUserAdvert', function (req, res, next) {
  console.log("clique sur delete advert");
  console.log("Id de l'utilisateur " + req.body._id + " Id des annonces " + req.body.idadvert);

  async.waterfall([
    //creation dans la table advert
    
    function (callback) {
      Advert.where('_id').equals(req.body.idadvert).remove(callback)

    },
    function (callback) {

      User.update({_id:req.body._id}, {$pull: {advert: {_id : req.body.idadvert}}},callback)
        
    }
  ], function (error, success) {
    if (error) res.json({ success: false, msg: 'probleme ajout' });

    return res.json(success);
  });


  //res.json({success:true});
});

// Profile
router.get('/profile', passport.authenticate('jwt', { session: false }), (req, res, next) => {

  res.json({ user: req.user });

});

router.get('/getUserAdvert/:id', (req, res, next) => {

  // console.log("contenu " + req.params.id);

  User.getUserAdvert(req.params.id, function (err, post) {
    if (err) return next(err);
    res.json(post)
    /// console.log(post)
  });


});

module.exports = router;
