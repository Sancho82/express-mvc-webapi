'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Flats', [{
      title: 'Luxury',
      price: '250000',
      floorArea: '150',
      country: 'Florida',
      zip: '65233',
      city: 'Miami',
      street: 'Greenneck',
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      title: 'Lowdown',
      price: '60000',
      floorArea: '60',
      country: 'South Carolina',
      zip: '45267',
      city: 'Charleston',
      street: 'Greyneck',
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      title: 'Fancy',
      price: '150000',
      floorArea: '150',
      country: 'Texas',
      zip: '29856',
      city: 'Austin',
      street: 'Yellowneck',
      createdAt: new Date(),
      updatedAt: new Date()
    }]);
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Flats', null, {});
  }
};
