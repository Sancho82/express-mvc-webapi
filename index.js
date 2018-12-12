// a nodemon a globálban van nálam, azért nem installáltam
// használt middlewarek beállítása
const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');
// kontroller beállítása
const flats = require('./controller/flats');

// app definiálás
const app = express();

// middlewarek használati módjának beállítása
app.use(morgan('common'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// ezt nehéz megfogalmazni
app.use('/', flats);

// beállítása annak, hogy mi állíthassuk be, hogy melyik porton figyel az webapp
app.listen(process.env.PORT, () => {
  console.log('Listening..');
});
