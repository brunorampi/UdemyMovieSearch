
'use strict'; //enable let

// DEPENDENCIES

const express = require('express');
const app = express();
const ejs = require('ejs');
const bodyParser = require('body-parser');
const request = require('request');

// CONSTANTS

const DEFAULT_PORT = 3000;
const PORT = process.env.PORT || DEFAULT_PORT;
const SERVER_MSG = 'Api Test is now running on port ' + PORT;

// SETTINGS

app.set('view engine', 'ejs');
ejs.delimiter = '?';

// VARIABLES

// SERVER

app.listen(PORT, function() {
  console.log(SERVER_MSG);
});

// ROUTES

app.get('/', function(req, res) {
  res.send(SERVER_MSG);
});

// MAIN
