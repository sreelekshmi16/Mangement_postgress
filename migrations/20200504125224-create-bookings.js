'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
      return queryInterface.createTable('bookings', {
          id: {
              allowNull: false,
              autoIncrement: true,
              primaryKey: true,
              type: Sequelize.INTEGER
          },
          user_id: {
              type: Sequelize.INTEGER,
              allowNull: false,
              references: {
                  model: 'Users',
                  key: 'id'
              }
          },
          ticket_id: {
              type: Sequelize.INTEGER,
              allowNull: false,
              references: {
                  model: 'tickets',
                  key: 'id'
              }
          },
          quantity: {
              type: Sequelize.INTEGER,
              allowNull: false,
              defaultValue: 0
          },
          isDeleted:{
            type:Sequelize.BOOLEAN
          },
          createdAt: {
              allowNull: false,
              type: Sequelize.DATE,
              defaultValue: Sequelize.fn('now')
          },
          updatedAt: {
              allowNull: false,
              type: Sequelize.DATE,
              defaultValue: Sequelize.fn('now')
          }
      });
  },
  down: (queryInterface, Sequelize) => {
      return queryInterface.dropTable('bookings');
  }
};