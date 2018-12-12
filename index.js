// a nodemon a globálban van nálam, azért nem installáltam
const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const flats = require('./controller/flats');

const app = express();

app.use(morgan('common'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use('/', flats);

app.listen(process.env.PORT, () => {
  console.log('Listening..');
});
