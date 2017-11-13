var express = require('express');
var app = express();
var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/FindMyJectDB',
  {
    useMongoClient: true
  }
  );

app.listen(3000);
