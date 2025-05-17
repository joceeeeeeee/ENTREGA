const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');
const Pedido = require('./Pedido');
const Producto = require('./Producto');

const DetallePedido = sequelize.define('DetallePedido', {
  Cantidad: {
    type: DataTypes.INTEGER,
    allowNull: false,
    validate: {
      min: 1
    }
  },
  Personalizacion: {
    type: DataTypes.STRING
  },
  Subtotal: {
    type: DataTypes.DECIMAL(10, 2),
    allowNull: false
  }
}, {
  timestamps: false
});

DetallePedido.belongsTo(Pedido, { foreignKey: 'PedidoId' });
DetallePedido.belongsTo(Producto, { foreignKey: 'ProductoId' });

module.exports = DetallePedido;
