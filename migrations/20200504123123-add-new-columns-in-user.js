'use strict';


module.exports = {
  up: async (queryInterface, Sequelize) => {
    return [
    
      await queryInterface.addColumn('Users', 'password', {
        type: Sequelize.STRING
     
      }),
      await queryInterface.addColumn('Users', 'roleId', {
        type: Sequelize.INTEGER,
        references: {
          model: 'roles',
          key: 'id'
      }
       
      })
    ];
  },
  

  down: async (queryInterface, Sequelize) => {
    return [
      await queryInterface.removeColumn('Users', 'password'),
      await queryInterface.removeColumn('Users', 'roleId')
    ];
  }
};
