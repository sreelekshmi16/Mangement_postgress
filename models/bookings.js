"use strict";

module.exports = (sequelize, DataTypes) => {
  const bookings = sequelize.define(
    "bookings",
    {
      user_id: DataTypes.INTEGER,
      ticket_id: DataTypes.INTEGER,
      quantity: DataTypes.INTEGER,
      isDeleted: DataTypes.BOOLEAN
    },
    {}
  );
  bookings.associate = function (models) {
    this.belongsTo(models.Users, {
      foreignKey: "user_id"
    });
    this.belongsTo(models.tickets, {
      foreignKey: "ticket_id"
    });
  };
  return bookings;
};
