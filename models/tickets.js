'use strict';
module.exports = (sequelize, DataTypes) => {
  const tickets = sequelize.define('tickets', {
    movie_name: DataTypes.STRING,
    available_tickets: DataTypes.INTEGER,
    startTime:DataTypes.BIGINT,
    endTime:DataTypes.BIGINT
  }, {});
  tickets.associate = function(models) {
    this.hasMany(models.bookings, {
      foreignKey: 'ticket_id'
  })
  };
  return tickets;
};