'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    
      // Add altering commands here.
      // Return a promise to correctly handle asynchronicity.

      // Example:
      return queryInterface.bulkInsert('Users', [{
        firstName: 'John',
        lastName: 'Doe',
        email: 'example@example.com',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {  firstName: 'Alex',
      lastName: 'Maliyekkal',
      email: 'example1@example.com',
      createdAt: new Date(),
      updatedAt: new Date()},
      {  firstName: 'Riswaan',
      lastName: 'Rashid',
      email: 'example2@example.com',
      createdAt: new Date(),
      updatedAt: new Date()
    }], {});
   
  },

  down: (queryInterface, Sequelize) => {
    
      // Add reverting commands here.
      // Return a promise to correctly handle asynchronicity.

      // Example:
      return queryInterface.bulkDelete('Users', null, {});
    
  }
};
