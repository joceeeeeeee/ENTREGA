const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');
const Mesa = require('./Mesa');

const ClientePedido = sequelize.define('ClientePedido', {
  NombreCliente: {
    type: DataTypes.STRING,
    allowNull: false
  },
  Fecha: {
    type: DataTypes.DATE,
    defaultValue: DataTypes.NOW
  }
}, {
  timestamps: false
});

ClientePedido.belongsTo(Mesa, { foreignKey: 'MesaId' });

module.exports = ClientePedido;
