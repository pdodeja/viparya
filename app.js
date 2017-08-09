"use strict";
const express = require('express');
const app = express();
const helmet = require('helmet');


app.enable('trust proxy');
app.set('view engine', 'pug');
app.use(helmet());
app.use(express.static('public'))

var config = {
            title: "Knowledge Empowers You!!"
            };
//Routes
require('./routes')(app, config);


app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
})
