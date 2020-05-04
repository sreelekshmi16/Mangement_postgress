'use strict';
module.exports = (sequelize, DataTypes) => {
  const Users = sequelize.define('Users', {
    firstName: DataTypes.STRING,
    lastName: DataTypes.STRING,
    email: DataTypes.STRING,
    password:DataTypes.STRING,
    roleId:DataTypes.INTEGER
   
  }, {});
  Users.associate = function(models) {
    this.belongsTo(models.roles, {
      foreignKey: 'roleId'
  });
  };
  return Users;
};  