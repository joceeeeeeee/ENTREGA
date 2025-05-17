const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Mesa = sequelize.define('Mesa', {
  NumeroMesa: {
    type: DataTypes.INTEGER,
    unique: true,
    allowNull: false
  }
}, {
  timestamps: false
});

module.exports = Mesa;
