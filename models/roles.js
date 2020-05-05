"use strict";
module.exports = (sequelize, DataTypes) => {
  const roles = sequelize.define(
    "roles",
    {
      name: DataTypes.STRING
    },
    {}
  );
  roles.associate = function (models) {
    this.hasMany(models.Users, {
      foreignKey: "roleId"
    });
  };

  return roles;
};
