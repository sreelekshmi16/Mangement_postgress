'use strict';


module.exports = {
  up: async (queryInterface, Sequelize) => {
    return [
    
      await queryInterface.addColumn('tickets', 'IsDeleted', {
        type: Sequelize.BOOLEAN
     
      }),
      await queryInterface.addColumn('tickets', 'CreatedBy_Id', {
        type: Sequelize.INTEGER
       
      })
    ];
  },
  

  down: async (queryInterface, Sequelize) => {
    return [
      await queryInterface.removeColumn('tickets', 'IsDeleted'),
      await queryInterface.removeColumn('tickets', 'CreatedBy_Id')
    ];
  }
};
