const express = require('express');
const models = require('../models');
const flats = express();

flats.get('/', (req, res) => {
  models.Flat.findAll().then(result => {
    res.json(result);
  });
});

module.exports = flats;
