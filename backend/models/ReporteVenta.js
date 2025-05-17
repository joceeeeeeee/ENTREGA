const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');
const Pedido = require('./Pedido');

const ReporteVenta = sequelize.define('ReporteVenta', {
  Fecha: {
    type: DataTypes.DATE,
    defaultValue: DataTypes.NOW
  },
  TotalVentas: {
    type: DataTypes.DECIMAL(10, 2),
    allowNull: false
  }
}, {
  timestamps: false
});

ReporteVenta.belongsTo(Pedido, { foreignKey: 'PedidoId' });

module.exports = ReporteVenta;
