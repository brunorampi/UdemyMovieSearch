
'use strict'; //enable let

// DEPENDENCIES

const express = require('express');
const app = express();
const ejs = require('ejs');
const request = require('request');

// CONSTANTS

const DEFAULT_PORT = 3000;
const PORT = process.env.PORT || DEFAULT_PORT;
const SERVER_MSG = 'Api Test is now running on port ' + PORT;
const mediaTypeStrings = {
  '': 'Media',
  'movie': 'Movies',
  'series': 'TV Shows',
  'game': 'Videoames'
};

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
  res.render('search');
});

app.get('/results', function(req, res) {
  const searchTerm = req.query.searchTerm;
  const mediaType = req.query.mediaType;
  const searchUrl = `http://www.omdbapi.com/?s=${searchTerm}&type=${mediaType}`;

  request(searchUrl, function(error, response, body) {
    if (!error && response.statusCode === 200) {
      const searchResults = JSON.parse(body);

      res.render('results', {
        searchTerm: searchTerm,
        mediaType: mediaTypeStrings[mediaType],
        searchResults: searchResults.Search
      });
    } else {
      console.log('Status Code: ', response.statusCode);
      console.log('Error: ', error);
    }
  });
});

// MAIN
