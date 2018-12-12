const express = require('express');
const models = require('../models');
const flats = express();

// index (show all)
flats.get('/', (req, res) => {
  // az összes lakást megkeresi
  models.Flat.findAll().then(result => {
    // majd visszadja őket json-ben
    res.json(result);
  });
});

// find by id
flats.get('/:id', (req, res) => {
  // keres egy olyan lakást ahol az id megegyezik a keresősávba beírt id-vel
  models.Flat.findOne({where: {id: req.params.id}}).then(result => {
    // ha van ilyen
    if (result) {
      // visszaadja json formátumban
      res.json(result);
    } else {
      // ha nincs, a következő üzenetet küldi
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
flats.put('/:title', (req, res) => {
  models.Flat.findOne({where: {title: req.params.title}}).then(result => {
    if (result) {
      models.Flat.update({
        price: req.body.price,
        floorArea: req.body.floorArea,
        country: req.body.country,
        zip: req.body.zip,
        city: req.body.city,
        street: req.body.street
      }, {
        where: {title: req.params.title}
      }).then(res.send(`${req.params.title} has been successfully updated.`));
    } else {
      res.send('Sorry, there is no flat with such a title in our database at the moment.');
    }
  });
});

// delete (by id)
flats.delete('/:id', (req, res) => {
  models.Flat.findOne({where: {id: req.params.id}}).then(result => {
    if (result) {
      models.Flat.destroy({where: {id: req.params.id}}).then(res.send(`Flat with id: ${req.params.id} has been succesfully deleted.`));
    } else {
      res.send('No house with such an id exists in database.');
    }
  });
});

module.exports = flats;
