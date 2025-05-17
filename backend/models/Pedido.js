const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');
const Usuario = require('./Usuario');
const ClientePedido = require('./ClientePedido');

const Pedido = sequelize.define('Pedido', {
  Estado: {
    type: DataTypes.STRING,
    defaultValue: 'Pendiente',
    validate: {
      isIn: [['Pendiente', 'En preparación', 'Listo', 'Cancelado', 'Enviado a cocina']]
    }
  },
  TotalPedido: {
    type: DataTypes.DECIMAL(10, 2),
    defaultValue: 0,
    allowNull: false
  },
  Fecha: {
    type: DataTypes.DATE,
    defaultValue: DataTypes.NOW
  }
}, {
  timestamps: false
});

Pedido.belongsTo(ClientePedido, { foreignKey: 'ClientePedidoId' });
Pedido.belongsTo(Usuario, { foreignKey: 'UsuarioId' });

module.exports = Pedido;
