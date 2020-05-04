'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Users', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      firstName: {
        type: Sequelize.STRING
      },
      lastName: {
        type: Sequelize.STRING
      },
      email: {
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Users');
  }
};


// module.exports = {
//   up: (queryInterface, Sequelize) => {
//     return queryInterface.createTable('Person', {
//       name: Sequelize.DataTypes.STRING,
//       isBetaMember: {
//         type: Sequelize.DataTypes.BOOLEAN,
//         defaultValue: false,
//         allowNull: false
//       },
//       userId: {
//         type: Sequelize.DataTypes.INTEGER,
//         references: {
//           model: {
//             tableName: 'users',
//             schema: 'schema'
//           },
//           key: 'id'
//         },
//         allowNull: false
//       },
//     });
//   },
//   down: (queryInterface, Sequelize) => {
//     return queryInterface.dropTable('Person');
//   }
// }