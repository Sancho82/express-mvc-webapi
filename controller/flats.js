const express = require('express');
const models = require('../models');
const flats = express();

// index (show all)
flats.get('/', (req, res) => {
  models.Flat.findAll().then(result => {
    res.json(result);
  });
});

// find by id
flats.get('/:id', (req, res) => {
  models.Flat.findOne({where: {id: req.params.id}}).then(result => {
    if (result) {
      res.json(result);
    } else {
      res.send('No house with such an id exists in database.');
    }
  });
});

// create
flats.post('/', (req, res) => {
  models.Flat.findOne({where: {title: req.body.title}}).then(result => {
    if (!result) {
      models.Flat.create({
        title: req.body.title,
        price: req.body.price,
        floorArea: req.body.floorArea,
        country: req.body.country,
        zip: req.body.zip,
        city: req.body.city,
        street: req.body.street
      }).then(result => {
        res.json(result);
      });
    } else {
      res.send('House with such a title already exists in database.');
    }
  });
});

// update

// delete (by id)
flats.put('/:id', (req, res) => {
  models.Flat.findOne({where: {id: req.params.id}}).then(result => {
    if (result) {
      models.Flat.delete(result).then(res.send(`Flat with id: ${req.params.id} has been succesfully deleted.`));
    } else {
      res.send('No house with such an id exists in database.');
    }
  });
});

module.exports = flats;
