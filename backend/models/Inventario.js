const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');
const Producto = require('./Producto');

const Inventario = sequelize.define('Inventario', {
  CantidadDisponible: {
    type: DataTypes.INTEGER,
    allowNull: false,
    validate: {
      min: 0
    }
  },
  StockMinimo: {
    type: DataTypes.INTEGER,
    allowNull: false,
    validate: {
      min: 0
    }
  },
  Actualizado: {
    type: DataTypes.DATE,
    defaultValue: DataTypes.NOW
  }
}, {
  timestamps: false
});

Inventario.belongsTo(Producto, { foreignKey: 'ProductoId' });

module.exports = Inventario;
