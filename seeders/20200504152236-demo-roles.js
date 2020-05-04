'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('roles', [{
      name: "Admin",
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: "Manger",
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: "Customer",
      createdAt: new Date(),
      updatedAt: new Date()
    }], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('roles', null, {});
  }
};
