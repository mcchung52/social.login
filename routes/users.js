'use strict';

var express = require('express');
var router = express.Router();

var ensureAuthenticated = require('../config/ensureAuthenticated');
var User = require('../models/user');

// USERS

router.get('/me', ensureAuthenticated, function(req, res) {
  User.findById(req.user, function(err, user){
    console.log(user);
    res.send({
      displayName: user.displayName,
      picture: user.picture
    });
  })
});

module.exports = router;
